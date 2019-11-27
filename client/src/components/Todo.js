import React from 'react';
import classNames from 'classnames';

const Todo = ({ text, completed, handleOnChange, handleRemove }) => (
  <li className={classNames({ completed })}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleOnChange}
      />
      <label>{text}</label>
      <button className="destroy" onClick={handleRemove} />
    </div>
  </li>
);

export default Todo;
