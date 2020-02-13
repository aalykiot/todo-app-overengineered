import { ofType } from 'redux-observable';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import * as apiService from 'services/api';
import { networkRequest } from 'utils/operators';

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
  networkRequest(apiService.getTodos, loadTodos)
);

const addTodoEpic = pipe(
  ofType(addTodo.type),
  map(action => action.payload),
  networkRequest(apiService.addTodo, addTodo)
);

const toggleTodoEpic = pipe(
  ofType(toggleTodo.type),
  map(action => action.payload),
  networkRequest(apiService.toggleTodo, toggleTodo)
);

const toggleAllEpic = pipe(
  ofType(toggleAllTodos.type),
  networkRequest(apiService.toggleAllTodos, toggleAllTodos)
);

const removeTodoEpic = pipe(
  ofType(removeTodo.type),
  map(action => action.payload),
  networkRequest(apiService.removeTodo, removeTodo)
);

const removeCompletedEpic = pipe(
  ofType(removeCompletedTodos.type),
  networkRequest(apiService.removeCompletedTodos, removeCompletedTodos)
);

export {
  loadTodosEpic,
  addTodoEpic,
  toggleTodoEpic,
  toggleAllEpic,
  removeTodoEpic,
  removeCompletedEpic,
};
