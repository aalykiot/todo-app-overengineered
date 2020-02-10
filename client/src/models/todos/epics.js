import { ofType } from 'redux-observable';
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

const loadTodosEpic = action$ =>
  action$.pipe(
    ofType(loadTodos.type),
    networkRequest(apiService.getTodos, loadTodos)
  );

const addTodoEpic = action$ =>
  action$.pipe(
    ofType(addTodo.type),
    map(action => action.payload),
    networkRequest(apiService.addTodo, addTodo)
  );

const toggleTodoEpic = action$ =>
  action$.pipe(
    ofType(toggleTodo.type),
    map(action => action.payload),
    networkRequest(apiService.toggleTodo, toggleTodo)
  );

const toggleAllEpic = action$ =>
  action$.pipe(
    ofType(toggleAllTodos.type),
    networkRequest(apiService.toggleAllTodos, toggleAllTodos)
  );

const removeTodoEpic = action$ =>
  action$.pipe(
    ofType(removeTodo.type),
    map(action => action.payload),
    networkRequest(apiService.removeTodo, removeTodo)
  );

const removeCompletedEpic = action$ =>
  action$.pipe(
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
