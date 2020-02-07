import { map } from 'rxjs/operators';

import { networkRequest as networkRequestAction } from '../models/system/actions';

const networkRequest = (service, action) =>
  map(data =>
    networkRequestAction({
      service,
      data,
      action,
    })
  );

export { networkRequest };
