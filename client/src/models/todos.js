import superagent from 'superagent';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

// Actions
const loadTodos = createAction('todos/LOAD_TODOS');
const loadTodosSuccess = createAction('todos/LOAD_TODOS_SUCCESS');
const loadTodosFailed = createAction('todos/LOAD_TODOS_FAILED');

const initState = {
  loading: false,
  items: [],
  error: null,
};

// Reducer
export default createReducer(initState, {
  [loadTodos.type]: state => {
    state.loading = true;
    state.error = null;
  },
  [loadTodosSuccess.type]: (state, { payload }) => {
    state.loading = false;
    state.list = payload;
  },
  [loadTodosFailed.type]: state => {
    state.loading = false;
    state.error = true;
  },
});

// Selectors
export const todosSelector = state => state.items;

// Epics
const BASE_URL = 'http://localhost:5000/api';

export const epics = {};

epics.loadTodos = action$ =>
  action$.pipe(
    ofType(loadTodos.type),
    switchMap(() =>
      from(superagent.get(`${BASE_URL}/todos`)).pipe(
        map(res => loadTodosSuccess(res.body)),
        catchError(() => of(loadTodosFailed()))
      )
    )
  );
