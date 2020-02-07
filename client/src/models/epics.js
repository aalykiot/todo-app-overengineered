import { combineEpics } from 'redux-observable';
import * as systemEpics from './system/epics';
import * as todosEpics from './todos/epics';

const rootEpics = combineEpics(
  ...Object.values(Object.assign({}, ...[systemEpics, todosEpics]))
);

export default rootEpics;
