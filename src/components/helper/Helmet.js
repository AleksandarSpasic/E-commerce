import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useIntl } from 'react-intl';

const HelmetTitle = ({ title }) => {
  const { formatMessage } = useIntl();

  return (
    <Helmet>
      <title>{formatMessage(title)} | Demo E-commerce</title>
    </Helmet>
  );
};

export default HelmetTitle;

HelmetTitle.propTypes = {
  title: PropTypes.object
};
