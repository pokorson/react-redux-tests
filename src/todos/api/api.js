import apiClient from '../../lib/api';
import './api.mock';

export const fetchTodos = () => apiClient.get('/todos/');

export const addTodo = todo => apiClient.post('/todos/create', todo);

export const removeTodo = todoId => apiClient.delete(`/todos/delete/${todoId}`);

export const completeTodo = todoId => apiClient.post(`/todos/complete/${todoId}`);
