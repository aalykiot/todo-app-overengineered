import { createSelector } from 'reselect';

export const todosSelector = state => state.todos.items;

export const totalTodosSelector = createSelector(
  todosSelector,
  todos => todos.length
);

export const activeTodosSelector = createSelector(
  todosSelector,
  todos => todos.filter(todos => !todos.completed).length
);

export const completedTodosSelector = createSelector(
  totalTodosSelector,
  activeTodosSelector,
  (total, active) => total - active
);

export const filterSelector = state => state.todos.filter;
