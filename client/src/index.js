import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'components/App';
import store from 'store/configureStore';
import { loadTodos } from 'models/todos/actions';

import './index.css';

store.dispatch(loadTodos());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
