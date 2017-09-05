import React, { Component } from 'react';
import './App.css';
import Layout from './layout';
import TodoList from './todos/TodoList';

class App extends Component {
  render() {
    return (
      <Layout>
        <TodoList />
      </Layout>
    );
  }
}

export default App;
