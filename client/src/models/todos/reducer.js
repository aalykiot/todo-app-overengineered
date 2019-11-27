import { createReducer } from '@reduxjs/toolkit';

import {
  loadTodosSuccess,
  addTodoSuccess,
  toggleTodoSuccess,
  removeTodoSuccess,
  removeCompletedSuccess,
  setFilter,
} from './actions';

const initState = {
  items: [],
  filter: null,
};

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
  [removeCompletedSuccess.type]: (state, { payload }) => {
    state.items = state.items.filter(
      todo => payload.map(t => t._id).indexOf(todo._id) === -1
    );
  },
});
