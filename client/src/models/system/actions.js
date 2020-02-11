import { createAction } from 'utils/actions';

const networkRequest = createAction('system/NETWORK_REQUEST');
const networkResponse = createAction('system/NETWORK_RESPONSE');

export { networkRequest, networkResponse };
