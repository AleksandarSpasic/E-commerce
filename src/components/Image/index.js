import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt }) => <img src={src} alt={alt} loading="lazy" />;

Image.defaultProps = {
  alt: 'Demo E-commerce'
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

export default Image;
