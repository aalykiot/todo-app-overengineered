export const todosSelector = state => state.todos.items;

export const totalTodosSelector = state => state.todos.items.length;

export const activeTodosSelector = state =>
  state.todos.items.filter(todos => !todos.completed).length;

export const filterSelector = state => state.todos.filter;
