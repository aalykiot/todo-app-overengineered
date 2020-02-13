import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
};

const Error = ({ text }) => (
  <div className="error-box animated fadeIn">
    <span className="error-box-title">Error</span>
    <br />
    <span>{text}</span>
  </div>
);

Error.propTypes = propTypes;

export default Error;
