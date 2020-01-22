import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  addTodo: PropTypes.func,
};

const Header = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    addTodo(value);
    setValue('');
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </header>
  );
};

Header.propTypes = propTypes;

export default Header;
