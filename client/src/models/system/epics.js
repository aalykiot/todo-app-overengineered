import { ofType } from 'redux-observable';
import { pipe } from 'rxjs';
import { switchMap, mergeAll } from 'rxjs/operators';

import { networkRequest, networkResponse } from './actions';

const networkRequestEpic = pipe(
  ofType(networkRequest.type),
  switchMap(({ payload: { service, data, action } }) =>
    service(data).then(res => [networkResponse(), action.succeeded(res)])
  ),
  mergeAll()
);

export { networkRequestEpic };
