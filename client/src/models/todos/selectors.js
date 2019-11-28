export const todosSelector = ({ todos }) => todos.items;

export const totalTodosSelector = ({ todos }) => todos.items.length;

export const activeTodosSelector = ({ todos }) =>
  todos.items.filter(todos => !todos.completed).length;

export const completedTodosSelector = ({ todos }) =>
  todos.items.filter(todos => todos.completed).length;

export const filterSelector = ({ todos }) => todos.filter;
