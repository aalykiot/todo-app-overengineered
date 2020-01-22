import withProps from '../../utils/models/withProps';

import {
  getTodos as todos,
  getActiveTodos as activeTodos,
  getFilter as filter,
} from '../../models/todos/selectors';

import {
  toggleTodo,
  toggleAllTodos,
  removeTodo,
} from '../../models/todos/actions';

const withTodoListProps = withProps(
  {
    todos,
    activeTodos,
    filter,
  },
  {
    toggleTodo,
    toggleAllTodos,
    removeTodo,
  }
);

export default withTodoListProps;
