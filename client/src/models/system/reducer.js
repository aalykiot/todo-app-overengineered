import { request, clearError } from './actions';

const initState = {
  loading: false,
  errors: [],
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case request.type:
      return {
        ...state,
        loading: true,
      };
    case request.succeeded.type:
      return {
        ...state,
        loading: false,
      };
    case request.failed.type:
      return {
        ...state,
        loading: false,
        errors: [...state.errors, payload],
      };
    case clearError.type:
      return {
        ...state,
        errors: state.errors.filter(error => error.id !== payload),
      };
    default:
      return state;
  }
};
