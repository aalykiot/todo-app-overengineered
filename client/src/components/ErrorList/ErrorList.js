import React from 'react';
import PropTypes from 'prop-types';

import Error from './components/Error';

const propTypes = {
  errors: PropTypes.array,
};

const ErrorList = ({ errors }) => {
  const renderErrors = () => {
    if (!errors) return <React.Fragment />;
    return errors
      .slice()
      .reverse()
      .map(({ id, text }) => <Error key={id} text={text} />);
  };

  return <div className="error-list">{renderErrors()}</div>;
};

ErrorList.propTypes = propTypes;

export default ErrorList;
