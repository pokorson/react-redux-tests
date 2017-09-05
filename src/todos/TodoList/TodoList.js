import React from 'react';
import TodoListItem from '../TodoListItem';
import TodoForm from '../TodoForm';
import todosApi from '../api';
import './TodoList.css';

class TodoList extends React.PureComponent {
  state = {
    todos: [],
    onlyCompleted: false,
  };

  componentDidMount() {
    todosApi.fetchTodos().then(response => this.setState({ todos: response.data }));
  }

  showOnlyCompleted = () => {
    this.setState({
      onlyCompleted: !this.state.onlyCompleted,
    });
  };

  addTodo = todo => {
    todosApi.addTodo(todo).then(responseTodo => {
      this.setState({
        todos: [...this.state.todos, responseTodo],
      });
    });
  };

  removeTodo = todoId => {
    todosApi.removeTodo(todoId).then(() => {
      this.setState({
        todos: this.state.todos.filter(t => t.id !== todoId),
      });
    });
  };

  completeTodo = todoId => {
    todosApi.completeTodo(todoId).then(() => {
      this.setState({
        todos: this.state.todos.map(t => {
          if (t.id === todoId) {
            return { ...t, completed: !t.completed };
          }
          return t;
        }),
      });
    });
  };

  render() {
    const todos = this.state.onlyCompleted ? this.state.todos.filter(t => t.completed) : this.state.todos;

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <div>
          <label>only uncompleted</label>
          <input type='checkbox' value={this.state.onlyCompleted} onChange={this.showOnlyCompleted} />
        </div>
        <div className='todos-list'>
          {todos.map(t => {
            return <TodoListItem onComplete={this.completeTodo} onRemove={this.removeTodo} key={t.id} {...t} />;
          })}
        </div>
      </div>
    );
  }
}

export default TodoList;
