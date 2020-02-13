import { map } from 'rxjs/operators';

import { request as requestAction } from 'models/system/actions';

const request = (service, action) =>
  map(data =>
    requestAction({
      service,
      data,
      action,
    })
  );

export { request };
