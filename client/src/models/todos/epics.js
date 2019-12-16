import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import * as apiService from '../../services/api';

import {
  loadTodos,
  addTodo,
  toggleTodo,
  toggleAllTodos,
  removeTodo,
  removeCompletedTodos,
} from './actions';

export const loadTodosEpic = action$ =>
  action$.pipe(
    ofType(loadTodos.type),
    switchMap(() =>
      from(apiService.getTodos()).pipe(
        map(res => loadTodos.succeeded(res.body))
      )
    )
  );

export const addTodoEpic = action$ =>
  action$.pipe(
    ofType(addTodo.type),
    map(action => action.payload),
    switchMap(text =>
      from(apiService.addTodo(text)).pipe(
        map(res => addTodo.succeeded(res.body))
      )
    )
  );

export const toggleTodoEpic = action$ =>
  action$.pipe(
    ofType(toggleTodo.type),
    map(action => action.payload),
    switchMap(todo =>
      from(apiService.toggleTodo(todo)).pipe(
        map(res => toggleTodo.succeeded(res.body))
      )
    )
  );

export const toggleAllEpic = action$ =>
  action$.pipe(
    ofType(toggleAllTodos.type),
    switchMap(() =>
      from(apiService.toggleAllTodos()).pipe(
        map(res => toggleAllTodos.succeeded(res.body))
      )
    )
  );

export const removeTodoEpic = action$ =>
  action$.pipe(
    ofType(removeTodo.type),
    map(action => action.payload),
    switchMap(todo =>
      from(apiService.removeTodo(todo)).pipe(
        map(res => removeTodo.succeeded(res.body))
      )
    )
  );

export const removeCompletedEpic = action$ =>
  action$.pipe(
    ofType(removeCompletedTodos.type),
    switchMap(() =>
      from(apiService.removeCompletedTodos()).pipe(
        map(res => removeCompletedTodos.succeeded(res.body))
      )
    )
  );
