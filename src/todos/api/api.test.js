import axios from 'axios';
import * as todosApi from './api';

describe('todos api', () => {
  beforeEach(() => {
    axios.post.mockReset();
  });

  it('calls todos index with #fetchTodos', () => {
    todosApi.fetchTodos();
    expect(axios.get).toHaveBeenCalledWith('/todos/');
  });

  it('calls todo create with #addTodo', () => {
    const todo = { id: 1, title: 'test title' };
    todosApi.addTodo(todo);
    expect(axios.post).toHaveBeenCalledWith('/todos/create', todo);
  });

  it('removes todo with #removeTodo', () => {
    const todoId = 1;
    todosApi.removeTodo(todoId);
    expect(axios.delete).toHaveBeenCalledWith(`/todos/delete/${todoId}`);
  });

  it('completes todo with #completeTodo', () => {
    const todoId = 1;
    todosApi.completeTodo(todoId);
    expect(axios.post).toHaveBeenCalledWith(`/todos/complete/${todoId}`);
  });
});
