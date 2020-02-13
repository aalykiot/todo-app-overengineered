import { createAction, createActionEvent } from 'utils/actions';

const request = createActionEvent('system/REQUEST');

const clearError = createAction('system/CLEAR_ERROR');

export { request, clearError };
