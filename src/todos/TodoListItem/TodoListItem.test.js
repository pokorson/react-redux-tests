import React from 'react';
import TodoListItem from './TodoListItem';
import { shallow, render } from 'enzyme';

describe('TodoListItem component', () => {
  it('renders without erros', () => {
    const component = shallow(<TodoListItem />);
  });

  it('renders title', () => {
    const props = { title: 'test title' };
    const component = render(<TodoListItem {...props} />);
    expect(component.find('span').text()).toEqual(props.title);
  });

  it('renders checked when props.checked is false', () => {
    const props = { checked: false };
    const component = render(<TodoListItem {...props} />);
    expect(component.find('input').val()).toEqual('false');
  });

  it('renders checked when props.checked is true', () => {
    const props = { checked: true };
    const component = render(<TodoListItem {...props} />);
    expect(component.find('input').val()).toEqual('true');
  });

  it('calls onComplete prop on checkbox change', () => {
    const props = {
      id: 1,
      onComplete: jest.fn(),
    };
    const component = shallow(<TodoListItem {...props} />);
    component.find('input').simulate('change');
    expect(props.onComplete).toHaveBeenCalledWith(props.id);
  });

  it('calls onRemove prop on button click', () => {
    const props = {
      id: 1,
      onRemove: jest.fn(),
    };
    const component = shallow(<TodoListItem {...props} />);
    component.find('button').simulate('click');
    expect(props.onRemove).toHaveBeenCalledWith(props.id);
  });
});
