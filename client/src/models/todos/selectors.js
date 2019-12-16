import { createSelector } from 'reselect';

export const getTodos = state => state.todos.items;

export const getTotalTodos = createSelector(getTodos, todos => todos.length);

export const getActiveTodos = createSelector(
  getTodos,
  todos => todos.filter(todos => !todos.completed).length
);

export const getCompletedTodos = createSelector(
  getTotalTodos,
  getActiveTodos,
  (total, active) => total - active
);

export const getFilter = state => state.todos.filter;
