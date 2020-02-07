import superagent from 'superagent';

const BASE_URL = 'http://localhost:5000/api';

const getTodos = () => {
  return superagent.get(`${BASE_URL}/todos`);
};

const addTodo = text => {
  return superagent.post(`${BASE_URL}/todos`).send({ text });
};

const toggleTodo = todo => {
  return superagent.put(`${BASE_URL}/todos/${todo.id}`).send({
    todo: {
      ...todo,
      completed: !todo.completed,
    },
  });
};

const toggleAllTodos = () => {
  return superagent.put(`${BASE_URL}/todos/toggle-all`);
};

const removeTodo = todo => {
  return superagent.delete(`${BASE_URL}/todos/${todo.id}`);
};

const removeCompletedTodos = () => {
  return superagent.delete(`${BASE_URL}/todos/completed`);
};

export {
  getTodos,
  addTodo,
  toggleTodo,
  toggleAllTodos,
  removeTodo,
  removeCompletedTodos,
};
