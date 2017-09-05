import React from 'react';
import TodoList from './TodoList';
import { shallow } from 'enzyme';

describe('TodoList component', () => {
  it('renders without erros', () => {
    const component = shallow(<TodoList />);
  });
});
