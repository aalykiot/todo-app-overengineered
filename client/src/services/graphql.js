import ApolloClient from 'apollo-boost';

import * as schema from 'graphql/schema';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

const handleGraphqlResponse = res => {
  if (res.errors) {
    throw new Error(res.errors[0].message);
  }
  return res.data['todos'];
};

const getTodos = () =>
  client
    .query({
      query: schema.GET_TODOS_QUERY,
    })
    .then(handleGraphqlResponse);

const addTodo = text =>
  client
    .mutate({
      mutation: schema.ADD_TODO_MUTATION,
      variables: {
        text,
      },
    })
    .then(handleGraphqlResponse);

const toggleTodo = todo =>
  client
    .mutate({
      mutation: schema.TOGGLE_TODO_MUTATION,
      variables: {
        id: todo.id,
      },
    })
    .then(handleGraphqlResponse);

const toggleAllTodos = () =>
  client
    .mutate({
      mutation: schema.TOGGLE_ALL_MUTATION,
    })
    .then(handleGraphqlResponse);

const removeTodo = todo =>
  client
    .mutate({
      mutation: schema.REMOVE_TODO_MUTATION,
      variables: {
        id: todo.id,
      },
    })
    .then(handleGraphqlResponse);

const removeCompletedTodos = () =>
  client
    .mutate({
      mutation: schema.REMOVE_COMPLETED_TODOS_MUTATION,
    })
    .then(handleGraphqlResponse);

export {
  getTodos,
  addTodo,
  toggleTodo,
  toggleAllTodos,
  removeTodo,
  removeCompletedTodos,
};
