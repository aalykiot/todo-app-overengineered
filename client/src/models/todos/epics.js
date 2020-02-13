import { ofType } from 'redux-observable';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import * as apiService from 'services/api';
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
  request(apiService.getTodos, loadTodos)
);

const addTodoEpic = pipe(
  ofType(addTodo.type),
  map(action => action.payload),
  request(apiService.addTodo, addTodo)
);

const toggleTodoEpic = pipe(
  ofType(toggleTodo.type),
  map(action => action.payload),
  request(apiService.toggleTodo, toggleTodo)
);

const toggleAllEpic = pipe(
  ofType(toggleAllTodos.type),
  request(apiService.toggleAllTodos, toggleAllTodos)
);

const removeTodoEpic = pipe(
  ofType(removeTodo.type),
  map(action => action.payload),
  request(apiService.removeTodo, removeTodo)
);

const removeCompletedEpic = pipe(
  ofType(removeCompletedTodos.type),
  request(apiService.removeCompletedTodos, removeCompletedTodos)
);

export {
  loadTodosEpic,
  addTodoEpic,
  toggleTodoEpic,
  toggleAllEpic,
  removeTodoEpic,
  removeCompletedEpic,
};
