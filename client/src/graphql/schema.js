import { gql } from 'apollo-boost';

const GET_TODOS_QUERY = gql`
  {
    todos {
      id
      text
      completed
    }
  }
`;

const ADD_TODO_MUTATION = gql`
  mutation CreateTodo($text: String!) {
    todos: createTodo(text: $text) {
      id
      text
      completed
    }
  }
`;

const TOGGLE_TODO_MUTATION = gql`
  mutation ToggleTodo($id: ID!) {
    todos: toggleTodo(id: $id) {
      id
      text
      completed
    }
  }
`;

const TOGGLE_ALL_MUTATION = gql`
  mutation ToggleAll {
    todos: toggleAll {
      id
      text
      completed
    }
  }
`;

const REMOVE_TODO_MUTATION = gql`
  mutation RemoveTodo($id: ID!) {
    todos: removeTodo(id: $id) {
      id
      text
      completed
    }
  }
`;

const REMOVE_COMPLETED_TODOS_MUTATION = gql`
  mutation RemoveCompleted {
    todos: removeCompleted {
      id
      text
      completed
    }
  }
`;

export {
  GET_TODOS_QUERY,
  ADD_TODO_MUTATION,
  TOGGLE_TODO_MUTATION,
  TOGGLE_ALL_MUTATION,
  REMOVE_TODO_MUTATION,
  REMOVE_COMPLETED_TODOS_MUTATION,
};
