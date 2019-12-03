import superagent from 'superagent';

const BASE_URL = 'http://localhost:5000/api';

export const getTodos = () => {
  return superagent.get(`${BASE_URL}/todos`);
};

export const addTodo = text => {
  return superagent.post(`${BASE_URL}/todos`).send({ text });
};

export const toggleTodo = todo => {
  return superagent.put(`${BASE_URL}/todos/${todo._id}`).send({
    todo: {
      ...todo,
      completed: !todo.completed,
    },
  });
};

export const toggleAllTodos = () => {
  return superagent.put(`${BASE_URL}/todos/toggle-all`);
};

export const removeTodo = todo => {
  return superagent.delete(`${BASE_URL}/todos/${todo._id}`);
};

export const removeCompletedTodos = () => {
  return superagent.delete(`${BASE_URL}/todos/completed`);
};
