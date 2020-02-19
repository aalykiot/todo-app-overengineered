import superagent from 'superagent';

const BASE_URL = 'http://localhost:5000/api';

const getTodos = () => {
  return superagent.get(`${BASE_URL}/todos`).then(res => res.body);
};

const addTodo = text => {
  return superagent
    .post(`${BASE_URL}/todos`)
    .send({ text })
    .then(res => res.body);
};

const toggleTodo = todo => {
  return superagent.put(`${BASE_URL}/todos/${todo.id}`).then(res => res.body);
};

const toggleAllTodos = () => {
  return superagent.put(`${BASE_URL}/todos/toggle-all`).then(res => res.body);
};

const removeTodo = todo => {
  return superagent
    .delete(`${BASE_URL}/todos/${todo.id}`)
    .then(res => res.body);
};

const removeCompletedTodos = () => {
  return superagent.delete(`${BASE_URL}/todos/completed`).then(res => res.body);
};

export {
  getTodos,
  addTodo,
  toggleTodo,
  toggleAllTodos,
  removeTodo,
  removeCompletedTodos,
};
