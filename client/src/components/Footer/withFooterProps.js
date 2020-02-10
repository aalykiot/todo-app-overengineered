import withProps from 'utils/models/withProps';

import {
  getTotalTodos as totalTodos,
  getActiveTodos as activeTodos,
  getCompletedTodos as completedTodos,
  getFilter as filter,
} from 'models/todos/selectors';

import { setFilter, removeCompletedTodos } from 'models/todos/actions';

const withFooterProps = withProps(
  {
    totalTodos,
    activeTodos,
    completedTodos,
    filter,
  },
  { setFilter, removeCompletedTodos }
);

export default withFooterProps;
