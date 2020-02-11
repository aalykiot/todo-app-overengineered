import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';

import { networkRequest, networkResponse } from './actions';

const networkRequestEpic = action$ =>
  action$.pipe(
    ofType(networkRequest.type),
    switchMap(({ payload: { service, data, action } }) =>
      from(service(data)).pipe(
        mergeMap(res => [networkResponse(), action.succeeded(res.body)])
      )
    )
  );

export { networkRequestEpic };
