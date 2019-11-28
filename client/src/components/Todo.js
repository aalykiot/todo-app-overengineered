import React from 'react';
import classNames from 'classnames';

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

export default Todo;
