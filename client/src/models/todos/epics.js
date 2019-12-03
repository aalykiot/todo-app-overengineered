import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import * as apiService from '../../services/api';

import {
  loadTodosRequest,
  loadTodosSuccess,
  addTodoRequest,
  addTodoSuccess,
  toggleTodoRequest,
  toggleTodoSuccess,
  toggleAllRequest,
  toggleAllSuccess,
  removeTodoRequest,
  removeTodoSuccess,
  removeCompletedRequest,
  removeCompletedSuccess,
} from './actions';

export const loadTodosEpic = action$ =>
  action$.pipe(
    ofType(loadTodosRequest.type),
    switchMap(() =>
      from(apiService.getTodos()).pipe(map(res => loadTodosSuccess(res.body)))
    )
  );

export const addTodoEpic = action$ =>
  action$.pipe(
    ofType(addTodoRequest.type),
    map(action => action.payload),
    switchMap(text =>
      from(apiService.addTodo(text)).pipe(map(res => addTodoSuccess(res.body)))
    )
  );

export const toggleTodoEpic = action$ =>
  action$.pipe(
    ofType(toggleTodoRequest.type),
    map(action => action.payload),
    switchMap(todo =>
      from(apiService.toggleTodo(todo)).pipe(
        map(res => toggleTodoSuccess(res.body))
      )
    )
  );

export const toggleAllEpic = action$ =>
  action$.pipe(
    ofType(toggleAllRequest.type),
    switchMap(() =>
      from(apiService.toggleAllTodos()).pipe(
        map(res => toggleAllSuccess(res.body))
      )
    )
  );

export const removeTodoEpic = action$ =>
  action$.pipe(
    ofType(removeTodoRequest.type),
    map(action => action.payload),
    switchMap(todo =>
      from(apiService.removeTodo(todo)).pipe(
        map(res => removeTodoSuccess(res.body))
      )
    )
  );

export const removeCompletedEpic = action$ =>
  action$.pipe(
    ofType(removeCompletedRequest.type),
    switchMap(() =>
      from(apiService.removeCompletedTodos()).pipe(
        map(res => removeCompletedSuccess(res.body))
      )
    )
  );
