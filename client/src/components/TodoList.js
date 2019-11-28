import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Todo from './Todo';

import { todosSelector, filterSelector } from '../models/todos/selectors';
import { toggleTodoRequest, removeTodoRequest } from '../models/todos/actions';

const TodoList = ({ todos, filter, toggleTodoRequest, removeTodoRequest }) => {
  const renderTodos = () => {
    if (!todos) {
      return <React.Fragment />;
    }

    return (
      <React.Fragment>
        {todos
          .slice()
          .reverse()
          .filter(todo => {
            switch (filter) {
              case 'active':
                return !todo.completed;
              case 'completed':
                return todo.completed;
              default:
                return true;
            }
          })
          .map(todo => (
            <Todo
              key={todo._id}
              todo={todo}
              handleOnChange={() => toggleTodoRequest(todo)}
              handleRemove={() => removeTodoRequest(todo)}
            />
          ))}
      </React.Fragment>
    );
  };

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all"></label>
      <ul className="todo-list">{renderTodos()}</ul>
    </section>
  );
};

const mapStateToProps = state => ({
  todos: todosSelector(state),
  filter: filterSelector(state),
});

const mapDispatchToProps = dispatch => ({
  toggleTodoRequest: bindActionCreators(toggleTodoRequest, dispatch),
  removeTodoRequest: bindActionCreators(removeTodoRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
