import * as todoService from 'services/todos';

const resolvers = {
  Query: {
    todos() {
      return todoService.find();
    },
  },
  Mutation: {
    createTodo(_, { text }) {
      return todoService.create(text).then(() => todoService.find());
    },
    updateTodo(_, { id, todo }) {
      return todoService.update(id, todo).then(() => todoService.find());
    },
    toggleTodo(_, { id }) {
      return todoService.toggle(id).then(() => todoService.find());
    },
    toggleAll() {
      return todoService.toggleAll().then(() => todoService.find());
    },
    removeTodo(_, { id }) {
      return todoService.remove(id).then(() => todoService.find());
    },
    removeCompleted() {
      return todoService.removeCompleted().then(() => todoService.find());
    },
  },
};

export default resolvers;
