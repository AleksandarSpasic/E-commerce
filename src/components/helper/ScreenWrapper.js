import React from 'react';
import PropTypes from 'prop-types';

import Helmet from './Helmet';

const ScreenWrapper = ({ className, title, children }) => (
  <div className={`screen_wrapper ${className}_screen`}>
    <Helmet title={title} />
    {children}
  </div>
);

export default ScreenWrapper;

ScreenWrapper.propTypes = {
  className: PropTypes.string,
  title: PropTypes.object
};
