import React from 'react';
import { shallow } from 'enzyme';
import uuidv1 from 'uuid/v1';
import toJson from 'enzyme-to-json';

describe('TodoList component', () => {
  jest.mock('../api/api');
  const TodoList = require('./TodoList').default;
  const TodoListItem = require('../TodoListItem').default;

  const todos = [
    { id: 1, title: 'test1', completed: false },
    { id: 2, title: 'test2', completed: true },
    { id: 3, title: 'test3', completed: false },
  ];

  it('render TodoListItem list', () => {
    const component = shallow(<TodoList />);
    component.setState({ todos: todos });
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders only completed todos when onlyCompleted is true', () => {
    const component = shallow(<TodoList />);
    component.setState({ todos: todos, onlyCompleted: true });
    expect(toJson(component)).toMatchSnapshot();
  });

  it('toggles onlyCompleted flag on checkbox click', () => {
    const component = shallow(<TodoList />);
    component.find('input').simulate('change');
    expect(component.state()).toHaveProperty('onlyCompleted', true);
    component.find('input').simulate('change');
    expect(component.state()).toHaveProperty('onlyCompleted', false);
  });

  it('calls completeTodo action from API and update completed in todo', done => {
    const component = shallow(<TodoList />);
    component.setState({ todos });
    component
      .instance()
      .completeTodo(todos[0].id)
      .then(() => {
        expect(component.state().todos[0].completed).toEqual(!todos[0].completed);
        done();
      });
  });

  it('calls removeTodo action from API and updates todos', done => {
    const component = shallow(<TodoList />);
    component.setState({ todos });
    component
      .instance()
      .removeTodo(todos[0].id)
      .then(() => {
        expect(component.find(TodoListItem)).toHaveLength(2);
        expect(component.state().todos).not.toContain(todos[0]);
        done();
      });
  });

  it('calls addTodo action from API and updates todos', done => {
    const component = shallow(<TodoList />);
    component.setState({ todos });
    const newTodo = { id: 4, title: 'new test', completed: false };
    component
      .instance()
      .addTodo(newTodo)
      .then(() => {
        expect(component.state().todos).toHaveLength(4);
        expect(component.state().todos).toContain(newTodo);
        done();
      });
  });
});
