import _ from 'lodash';
import shortid from 'shortid';

import {
  loadTodosSuccess,
  addTodoRequest,
  addTodoSuccess,
  toggleTodoRequest,
  toggleTodoSuccess,
  toggleAllRequest,
  toggleAllSuccess,
  removeTodoRequest,
  removeTodoSuccess,
  removeCompletedRequest,
  removeCompletedSuccess,
  setFilter,
} from './actions';

const initState = {
  items: [],
  filter: null,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case addTodoRequest.type: {
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
    case toggleTodoRequest.type:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === payload.id
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    case toggleAllRequest.type: {
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
    case removeTodoRequest.type:
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload.id),
      };
    case removeCompletedRequest.type:
      return {
        ...state,
        items: state.items.filter(item => !item.completed),
      };
    case setFilter.type:
      return {
        ...state,
        filter: payload,
      };
    case loadTodosSuccess.type:
    case addTodoSuccess.type:
    case toggleTodoSuccess.type:
    case toggleAllSuccess.type:
    case removeTodoSuccess.type:
    case removeCompletedSuccess.type:
      return {
        ...state,
        items: _.isEqual(state.items, payload) ? state.items : payload,
      };
    default:
      return state;
  }
};
