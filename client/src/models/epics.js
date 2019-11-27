import { combineEpics } from 'redux-observable';
import * as todosEpics from './todos/epics';

const rootEpics = combineEpics(
  ...Object.values(Object.assign({}, ...[todosEpics]))
);

export default rootEpics;
