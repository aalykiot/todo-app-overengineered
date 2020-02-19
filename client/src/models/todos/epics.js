import { ofType } from 'redux-observable';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

// import * as apiService from 'services/api';
import * as graphqlService from 'services/graphql';

import { request } from 'utils/operators';

import {
  loadTodos,
  addTodo,
  toggleTodo,
  toggleAllTodos,
  removeTodo,
  removeCompletedTodos,
} from './actions';

const loadTodosEpic = pipe(
  ofType(loadTodos.type),
  request(graphqlService.getTodos, loadTodos)
);

const addTodoEpic = pipe(
  ofType(addTodo.type),
  map(action => action.payload),
  request(graphqlService.addTodo, addTodo)
);

const toggleTodoEpic = pipe(
  ofType(toggleTodo.type),
  map(action => action.payload),
  request(graphqlService.toggleTodo, toggleTodo)
);

const toggleAllEpic = pipe(
  ofType(toggleAllTodos.type),
  request(graphqlService.toggleAllTodos, toggleAllTodos)
);

const removeTodoEpic = pipe(
  ofType(removeTodo.type),
  map(action => action.payload),
  request(graphqlService.removeTodo, removeTodo)
);

const removeCompletedEpic = pipe(
  ofType(removeCompletedTodos.type),
  request(graphqlService.removeCompletedTodos, removeCompletedTodos)
);

export {
  loadTodosEpic,
  addTodoEpic,
  toggleTodoEpic,
  toggleAllEpic,
  removeTodoEpic,
  removeCompletedEpic,
};
