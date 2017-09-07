import React from 'react';
import TodoListItem from './TodoListItem';
import { shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('TodoListItem component', () => {
  it('renders title from props', () => {
    const component = render(<TodoListItem title='test title' />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders checked when props.checked is false', () => {
    const component = render(<TodoListItem checked={false} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders checked when props.checked is true', () => {
    const component = render(<TodoListItem checked={true} />);
    expect(toJson(component)).toMatchSnapshot();
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
