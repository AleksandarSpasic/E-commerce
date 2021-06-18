import React from 'react';
import PropTypes from 'prop-types';
import ButtonCore from '@material-ui/core/Button';

const Button = ({ color, children, ...rest }) => 
  <ButtonCore className={`button ${color}`} {...rest}>{children}</ButtonCore>

export default Button;

Button.defaultProps = {
  color: 'primary'
};

Button.propTypes = {
  color: PropTypes.string
};
