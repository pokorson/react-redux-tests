import React from 'react';
import TodoForm from './TodoForm';
import { shallow } from 'enzyme';

describe('TodoForm component', () => {
  it('renders without erros', () => {
    const component = shallow(<TodoForm />);
  });

  it('calls onSubmit props on button click', () => {
    const props = {
      onSubmit: jest.fn(),
    };
    const component = shallow(<TodoForm {...props} />);
    component.find('button').simulate('click', { preventDefault: () => {} });
    expect(props.onSubmit).toHaveBeenCalled();
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
  });
});
