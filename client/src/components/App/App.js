import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import TodoList from 'components/TodoList';
import Footer from 'components/Footer';

import { ClassicSpinner } from 'react-spinners-kit';

const propTypes = {
  loading: PropTypes.bool,
};

const App = ({ loading }) => (
  <React.Fragment>
    <div className="todoapp">
      <Header />
      <TodoList />
      <Footer />
    </div>
    <div className="networkSpinner">
      <ClassicSpinner size={25} color="#999" loading={loading} />
    </div>
  </React.Fragment>
);

App.propTypes = propTypes;

export default App;
