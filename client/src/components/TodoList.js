import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Todo from './Todo';

import {
  todosSelector,
  filterSelector,
  activeTodosSelector,
} from '../models/todos/selectors';

import {
  toggleTodoRequest,
  toggleAllRequest,
  removeTodoRequest,
} from '../models/todos/actions';

const propTypes = {
  todos: PropTypes.array,
  activeTodos: PropTypes.number,
  filter: PropTypes.string,
  toggleTodoRequest: PropTypes.func,
  toggleAllRequest: PropTypes.func,
  removeTodoRequest: PropTypes.func,
};

const TodoList = ({
  todos,
  activeTodos,
  filter,
  toggleTodoRequest,
  toggleAllRequest,
  removeTodoRequest,
}) => {
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
              key={todo.id}
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
      {todos.length > 0 && (
        <React.Fragment>
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            checked={activeTodos === 0}
            onChange={toggleAllRequest}
          />
          <label htmlFor="toggle-all"></label>
        </React.Fragment>
      )}
      <ul className="todo-list">{renderTodos()}</ul>
    </section>
  );
};

TodoList.propTypes = propTypes;

const mapStateToProps = state => ({
  todos: todosSelector(state),
  activeTodos: activeTodosSelector(state),
  filter: filterSelector(state),
});

const mapDispatchToProps = dispatch => ({
  toggleTodoRequest: bindActionCreators(toggleTodoRequest, dispatch),
  toggleAllRequest: bindActionCreators(toggleAllRequest, dispatch),
  removeTodoRequest: bindActionCreators(removeTodoRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
