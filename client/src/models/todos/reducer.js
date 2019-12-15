import {
  loadTodosSuccess,
  addTodoSuccess,
  toggleTodoSuccess,
  toggleAllSuccess,
  removeTodoSuccess,
  removeCompletedSuccess,
  setFilter,
} from './actions';

const initState = {
  items: [],
  filter: null,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
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
        items: payload,
      };
    default:
      return state;
  }
};
