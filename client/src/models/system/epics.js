import shortid from 'shortid';
import { ofType } from 'redux-observable';
import { pipe } from 'rxjs';
import { map, switchMap, mergeAll, delay } from 'rxjs/operators';

import { request, clearError } from './actions';

const requestEpic = pipe(
  ofType(request.type),
  switchMap(({ payload: { service, data, action } }) =>
    service(data)
      .then(res => [request.succeeded(), action.succeeded(res)])
      .catch(err => [
        request.failed({ id: shortid.generate(), text: err.message }),
      ])
  ),
  mergeAll()
);

const requestFailedEpic = pipe(
  ofType(request.failed.type),
  delay(8000),
  map(action => clearError(action.payload.id))
);

export { requestEpic, requestFailedEpic };
