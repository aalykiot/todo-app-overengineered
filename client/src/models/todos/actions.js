import { createAction } from '@reduxjs/toolkit';

export const setFilter = createAction('todos/SET_FILTER');

export const loadTodos = createAction('todos/LOAD_TODOS');
export const loadTodosSuccess = createAction('todos/LOAD_TODOS_SUCCESS');

export const addTodo = createAction('todos/ADD_TODO');
export const addTodoSuccess = createAction('todos/ADD_TODO_SUCCESS');

export const toggleTodo = createAction('todos/TOGGLE_TODO');
export const toggleTodoSuccess = createAction('todos/TOGGLE_TODO_SUCCESS');

export const removeTodo = createAction('todos/REMOVE_TODO');
export const removeTodoSuccess = createAction('todos/REMOVE_TODO_SUCCESS');

export const removeCompleted = createAction('todos/REMOVE_COMPLETED');
export const removeCompletedSuccess = createAction(
  'todos/REMOVE_COMPLETED_SUCCESS'
);
