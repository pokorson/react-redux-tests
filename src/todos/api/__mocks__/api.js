const todosApiMock = {
  completeTodo: jest.fn(() => Promise.resolve()),
  removeTodo: jest.fn(() => Promise.resolve()),
  addTodo: jest.fn(todo => Promise.resolve(todo)),
};

module.exports = todosApiMock;
