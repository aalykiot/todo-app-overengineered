import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setFilter, removeCompletedTodos } from '../models/todos/actions';
import { completedTodosSelector } from '../models/todos/selectors';

import {
  totalTodosSelector,
  activeTodosSelector,
  filterSelector,
} from '../models/todos/selectors';

const propTypes = {
  totalTodos: PropTypes.number,
  activeTodos: PropTypes.number,
  completedTodos: PropTypes.number,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  removeCompletedTodos: PropTypes.func,
};

const filters = [
  { text: 'All', value: null },
  { text: 'Active', value: 'active' },
  { text: 'Completed', value: 'completed' },
];

const Footer = ({
  totalTodos,
  activeTodos,
  completedTodos,
  filter,
  setFilter,
  removeCompletedTodos,
}) => {
  const renderFilters = () => (
    <React.Fragment>
      {filters.map(item => (
        <li key={item.value}>
          <a
            href="#/"
            className={classNames({ selected: filter === item.value })}
            onClick={() => setFilter(item.value)}
          >
            {item.text}
          </a>
        </li>
      ))}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {totalTodos > 0 && (
        <footer className="footer">
          <span className="todo-count">
            <strong>{activeTodos} </strong>
            <span> </span>
            <span>{activeTodos === 1 ? 'item' : 'items'} </span>
            <span>left</span>
          </span>
          <ul className="filters">{renderFilters()}</ul>
          {completedTodos > 0 && (
            <button className="clear-completed" onClick={removeCompletedTodos}>
              Clear completed
            </button>
          )}
        </footer>
      )}
    </React.Fragment>
  );
};

Footer.propTypes = propTypes;

const mapStateToProps = state => ({
  totalTodos: totalTodosSelector(state),
  activeTodos: activeTodosSelector(state),
  completedTodos: completedTodosSelector(state),
  filter: filterSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setFilter: bindActionCreators(setFilter, dispatch),
  removeCompletedTodos: bindActionCreators(removeCompletedTodos, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
