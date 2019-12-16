import { createAction, createActionEvent } from '../../utils/actions';

export const setFilter = createAction('todos/SET_FILTER');

export const loadTodos = createActionEvent('todos/LOAD_TODOS');

export const addTodo = createActionEvent('todos/ADD_TODO');

export const toggleTodo = createActionEvent('todos/TOGGLE_TODO');

export const toggleAllTodos = createActionEvent('todos/TOGGLE_ALL');

export const removeTodo = createActionEvent('todo/REMOVE_TODO');

export const removeCompletedTodos = createActionEvent('todo/REMOVE_COMPLETED');
