import React from 'react';
import TodoForm from './TodoForm';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('TodoForm component', () => {
  it('renders component', () => {
    const component = shallow(<TodoForm />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('calls onSubmit props on button click', () => {
    const onSubmit = jest.fn();
    const component = shallow(<TodoForm onSubmit={onSubmit} />);
    component.find('button').simulate('click', { preventDefault: () => {} });
    expect(onSubmit).toHaveBeenCalled();
  });

  it('updates title on input change', () => {
    const component = shallow(<TodoForm />);
    const newTitle = 'new test title';
    component.find('input[name="title"]').simulate('change', { target: { value: newTitle } });
    expect(component.instance().state).toHaveProperty('title', newTitle);
  });

  it('renders title inside input', () => {
    const component = shallow(<TodoForm />);
    const title = 'title for state';
    component.setState({ title });
    expect(component.find('input').props()).toHaveProperty('value', title);
    expect(toJson(component)).toMatchSnapshot();
  });
});
