import _ from 'lodash';
import shortid from 'shortid';

import {
  loadTodos,
  addTodo,
  toggleTodo,
  toggleAllTodos,
  removeTodo,
  removeCompletedTodos,
  setFilter,
} from './actions';

const initState = {
  items: [],
  filter: null,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case addTodo.type: {
      const todo = {
        id: shortid.generate(),
        text: payload,
        completed: false,
      };

      return {
        ...state,
        items: [...state.items, todo],
      };
    }
    case toggleTodo.type:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === payload.id
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    case toggleAllTodos.type: {
      const notCompletedTodos = state.items.filter(
        item => item.completed === false
      ).length;
      return {
        ...state,
        items: state.items.map(item => ({
          ...item,
          completed: notCompletedTodos === 0,
        })),
      };
    }
    case removeTodo.type:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload.id),
      };
    case removeCompletedTodos.type:
      return {
        ...state,
        items: state.items.filter(item => !item.completed),
      };
    case setFilter.type:
      return {
        ...state,
        filter: payload,
      };
    case loadTodos.succeeded.type:
    case addTodo.succeeded.type:
    case toggleTodo.succeeded.type:
    case toggleAllTodos.succeeded.type:
    case removeTodo.succeeded.type:
    case removeCompletedTodos.succeeded.type:
      return {
        ...state,
        items: _.isEqual(state.items, payload) ? state.items : payload,
      };
    default:
      return state;
  }
};
