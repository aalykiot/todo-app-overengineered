import { createAction, createActionEvent } from '../../utils/actions';

const setFilter = createAction('todos/SET_FILTER');

const loadTodos = createActionEvent('todos/LOAD_TODOS');

const addTodo = createActionEvent('todos/ADD_TODO');

const toggleTodo = createActionEvent('todos/TOGGLE_TODO');

const toggleAllTodos = createActionEvent('todos/TOGGLE_ALL');

const removeTodo = createActionEvent('todo/REMOVE_TODO');

const removeCompletedTodos = createActionEvent('todo/REMOVE_COMPLETED');

export {
  setFilter,
  loadTodos,
  addTodo,
  toggleTodo,
  toggleAllTodos,
  removeTodo,
  removeCompletedTodos,
};
