import { connect } from 'react-redux';

const EMPTY = {};

const createProps = (selectors = EMPTY) => state =>
  Object.entries(selectors).reduce(
    (props, [key, selector]) => ({
      ...props,
      [key]: selector(state),
    }),
    {}
  );

const createActionProps = (actions = EMPTY) => dispatch =>
  Object.entries(actions).reduce(
    (props, [key, action]) => ({
      ...props,
      [key]: (...args) => dispatch(action(...args)),
    }),
    {}
  );

const withProps = (stateProps = EMPTY, actionProps = EMPTY) =>
  connect(createProps(stateProps), createActionProps(actionProps));

export default withProps;
