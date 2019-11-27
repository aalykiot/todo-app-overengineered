import { configureStore } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import todosReducer from '../models/todos';

import { epics as todosEpics } from '../models/todos';

const rootReducer = {
  todos: todosReducer,
};

const rootEpics = combineEpics(
  ...Object.values(Object.assign({}, ...[todosEpics]))
);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpics);

export default store;
