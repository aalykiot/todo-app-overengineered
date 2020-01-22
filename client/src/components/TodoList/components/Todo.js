import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  todo: PropTypes.object,
  handleOnChange: PropTypes.func,
  handleRemove: PropTypes.func,
};

const Todo = ({ todo, handleOnChange, handleRemove }) => (
  <li className={classNames({ completed: todo.completed })}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={handleOnChange}
      />
      <label>{todo.text}</label>
      <button className="destroy" onClick={handleRemove} />
    </div>
  </li>
);

Todo.propTypes = propTypes;

export default Todo;
