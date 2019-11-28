import superagent from 'superagent';
import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import {
  loadTodosRequest,
  loadTodosSuccess,
  addTodoRequest,
  addTodoSuccess,
  toggleTodoRequest,
  toggleTodoSuccess,
  removeTodoRequest,
  removeTodoSuccess,
  removeCompletedRequest,
  removeCompletedSuccess,
} from './actions';

const BASE_URL = 'http://localhost:5000/api';

export const loadTodosEpic = action$ =>
  action$.pipe(
    ofType(loadTodosRequest.type),
    switchMap(() =>
      from(superagent.get(`${BASE_URL}/todos`)).pipe(
        map(res => loadTodosSuccess(res.body))
      )
    )
  );

export const addTodoEpic = action$ =>
  action$.pipe(
    ofType(addTodoRequest.type),
    map(action => action.payload),
    switchMap(text =>
      from(superagent.post(`${BASE_URL}/todos`).send({ text })).pipe(
        map(res => addTodoSuccess(res.body))
      )
    )
  );

export const toggleTodoEpic = action$ =>
  action$.pipe(
    ofType(toggleTodoRequest.type),
    map(action => action.payload),
    switchMap(todo =>
      from(
        superagent.put(`${BASE_URL}/todos/${todo._id}`).send({
          todo: {
            ...todo,
            completed: !todo.completed,
          },
        })
      ).pipe(map(res => toggleTodoSuccess(res.body)))
    )
  );

export const removeTodoEpic = action$ =>
  action$.pipe(
    ofType(removeTodoRequest.type),
    map(action => action.payload),
    switchMap(todo =>
      from(superagent.delete(`${BASE_URL}/todos/${todo._id}`)).pipe(
        map(res => removeTodoSuccess(res.body))
      )
    )
  );

export const removeCompletedEpic = action$ =>
  action$.pipe(
    ofType(removeCompletedRequest.type),
    switchMap(() =>
      from(superagent.delete(`${BASE_URL}/todos/completed`)).pipe(
        map(res => removeCompletedSuccess(res.body))
      )
    )
  );
