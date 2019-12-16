const createAction = type => {
  const createActionFunc = payload => ({
    type,
    payload,
  });
  createActionFunc.type = type;
  return createActionFunc;
};

const createActionEvent = type => {
  const action = createAction(type);
  action.succeeded = createAction(`${type}_SUCCEEDED`);
  action.failed = createAction(`${type}_FAILED`);
  return action;
};

export { createAction, createActionEvent };
