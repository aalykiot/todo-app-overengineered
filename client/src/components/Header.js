import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addTodoRequest } from '../models/todos/actions';

const Header = ({ addTodoRequest }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    addTodoRequest(value);
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

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  addTodoRequest: bindActionCreators(addTodoRequest, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
