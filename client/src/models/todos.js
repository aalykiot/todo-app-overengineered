import superagent from 'superagent';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

// Actions
export const setFilter = createAction('todos/SET_FILTER');

export const loadTodos = createAction('todos/LOAD_TODOS');
export const loadTodosSuccess = createAction('todos/LOAD_TODOS_SUCCESS');

export const addTodo = createAction('todos/ADD_TODO');
export const addTodoSuccess = createAction('todos/ADD_TODO_SUCCESS');

export const toggleTodo = createAction('todos/TOGGLE_TODO');
export const toggleTodoSuccess = createAction('todos/TOGGLE_TODO_SUCCESS');

export const removeTodo = createAction('todos/REMOVE_TODO');
export const removeTodoSuccess = createAction('todos/REMOVE_TODO_SUCCESS');

const initState = {
  items: [],
  filter: null,
};

// Reducer
export default createReducer(initState, {
  [setFilter.type]: (state, { payload }) => {
    state.filter = payload;
  },
  [loadTodosSuccess.type]: (state, { payload }) => {
    state.items = payload;
  },
  [addTodoSuccess.type]: (state, { payload }) => {
    state.items.push(payload);
  },
  [toggleTodoSuccess.type]: (state, { payload }) => {
    state.items = state.items.map(todo =>
      todo._id === payload._id ? payload : todo
    );
  },
  [removeTodoSuccess.type]: (state, { payload }) => {
    state.items = state.items.filter(todo => todo._id !== payload._id);
  },
});

// Selectors
export const todosSelector = state => state.todos.items;
export const totalTodosSelector = state => state.todos.items.length;
export const activeTodosSelector = state =>
  state.todos.items.filter(todos => !todos.completed).length;
export const filterSelector = state => state.todos.filter;

// Epics
const BASE_URL = 'http://localhost:5000/api';

export const epics = {};

epics.loadTodos = action$ =>
  action$.pipe(
    ofType(loadTodos.type),
    switchMap(() =>
      from(superagent.get(`${BASE_URL}/todos`)).pipe(
        map(res => loadTodosSuccess(res.body))
      )
    )
  );

epics.addTodo = action$ =>
  action$.pipe(
    ofType(addTodo.type),
    map(action => action.payload),
    switchMap(text =>
      from(superagent.post(`${BASE_URL}/todos`).send({ text })).pipe(
        map(res => addTodoSuccess(res.body))
      )
    )
  );

epics.toggleTodo = action$ =>
  action$.pipe(
    ofType(toggleTodo.type),
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

epics.removeTodo = action$ =>
  action$.pipe(
    ofType(removeTodo.type),
    map(action => action.payload),
    switchMap(todo =>
      from(superagent.delete(`${BASE_URL}/todos/${todo._id}`)).pipe(
        map(res => removeTodoSuccess(res.body))
      )
    )
  );
