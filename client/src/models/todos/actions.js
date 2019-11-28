import { createAction } from '@reduxjs/toolkit';

export const setFilter = createAction('todos/SET_FILTER');

export const loadTodosRequest = createAction('todos/LOAD_TODOS_REQUEST');
export const loadTodosSuccess = createAction('todos/LOAD_TODOS_SUCCESS');

export const addTodoRequest = createAction('todos/ADD_TODO_REQUEST');
export const addTodoSuccess = createAction('todos/ADD_TODO_SUCCESS');

export const toggleTodoRequest = createAction('todos/TOGGLE_TODO_REQUEST');
export const toggleTodoSuccess = createAction('todos/TOGGLE_TODO_SUCCESS');

export const removeTodoRequest = createAction('todos/REMOVE_TODO_REQUEST');
export const removeTodoSuccess = createAction('todos/REMOVE_TODO_SUCCESS');

export const removeCompletedRequest = createAction(
  'todos/REMOVE_COMPLETED_REQUEST'
);
export const removeCompletedSuccess = createAction(
  'todos/REMOVE_COMPLETED_SUCCESS'
);
