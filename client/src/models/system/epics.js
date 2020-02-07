import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { networkRequest } from './actions';

const networkRequestEpic = action$ =>
  action$.pipe(
    ofType(networkRequest.type),
    switchMap(({ payload: { service, data, action } }) =>
      from(service(data)).pipe(map(res => action.succeeded(res.body)))
    )
  );

export { networkRequestEpic };
