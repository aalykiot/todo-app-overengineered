import { createSelector } from 'reselect';

const getTodos = state => state.todos.items;

const getTotalTodos = createSelector(getTodos, todos => todos.length);

const getActiveTodos = createSelector(
  getTodos,
  todos => todos.filter(todos => !todos.completed).length
);

const getCompletedTodos = createSelector(
  getTotalTodos,
  getActiveTodos,
  (total, active) => total - active
);

const getFilter = state => state.todos.filter;

export {
  getTodos,
  getTotalTodos,
  getActiveTodos,
  getCompletedTodos,
  getFilter,
};
