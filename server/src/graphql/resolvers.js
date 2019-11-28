import superagent from 'superagent';

const BASE_URL = process.env.BASE_URL || 'http://localhost:5000/api';

const resolvers = {
  Query: {
    todos() {
      return superagent.get(`${BASE_URL}/todos`).then(res => res.body);
    },
  },
  Mutation: {
    createTodo(_, { text }) {
      return superagent
        .post(`${BASE_URL}/todos`)
        .send({ text })
        .then(res => res.body);
    },
    updateTodo(_, { id, todo }) {
      return superagent
        .put(`${BASE_URL}/todos/${id}`)
        .send({ todo })
        .then(res => res.body);
    },
    updateNotCompleted() {
      return superagent
        .put(`${BASE_URL}/todos/not-completed`)
        .then(res => res.body);
    },
    removeTodo(_, { id }) {
      return superagent.delete(`${BASE_URL}/todos/${id}`).then(res => res.body);
    },
    removeCompleted() {
      return superagent
        .delete(`${BASE_URL}/todos/completed`)
        .then(res => res.body);
    },
  },
};

export default resolvers;
