import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('renders Layout', () => {
    const component = shallow(<App />);
    expect(component.find('Layout')).toHaveLength(1);
  });

  it('renders TodoList', () => {
    const component = shallow(<App />);
    expect(component.find('TodoList')).toHaveLength(1);
  });
});
