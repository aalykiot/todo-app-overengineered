import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Todo from './Todo';

import { todosSelector } from '../models/todos';
import { toggleTodo, removeTodo } from '../models/todos';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  //
  const renderTodos = () => {
    //
    if (!todos) {
      return <React.Fragment />;
    }

    return (
      <React.Fragment>
        {todos
          .slice()
          .reverse()
          .map(todo => (
            <Todo
              key={todo._id}
              text={todo.text}
              completed={todo.completed}
              handleOnChange={() => toggleTodo(todo)}
              handleRemove={() => removeTodo(todo)}
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
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: bindActionCreators(toggleTodo, dispatch),
  removeTodo: bindActionCreators(removeTodo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
