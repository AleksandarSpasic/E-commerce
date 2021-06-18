import React from 'react';
import { useHistory } from 'react-router-dom';

import ScreenWrapper from 'components/helper/ScreenWrapper';
import messages from './messages';
import Button from 'components/Button';
import FormatMessage from 'i18n/FormatMessage';

const NotFound = () => {
  const { goBack } = useHistory();

  return (
    <ScreenWrapper className='not_found' title={messages.helmet}>
      <div className='container'>
        <div className='not_found_content'>
          <h1>
            <FormatMessage>{messages.helmet}</FormatMessage>
          </h1>
          <Button onClick={goBack}>
            <FormatMessage>{messages.button}</FormatMessage>
          </Button>
        </div>
      </div>
    </ScreenWrapper>
  );
};

export default NotFound;
