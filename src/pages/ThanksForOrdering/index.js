import React from 'react';

import ScreenWrapper from 'components/helper/ScreenWrapper';
import FormatMessage from 'i18n/FormatMessage';
import messages from './messages';

const ThanksForOrdering = () => {
  return (
    <ScreenWrapper className="thanks_for_ordering" title={messages.helmet}>
      <div className="container">
        <div className="thanks_for_ordering_content">
          <h1>
            <FormatMessage>{messages.title}</FormatMessage>
          </h1>
          <p>
            <FormatMessage>{messages.order_date}</FormatMessage> 2020-02-03
          </p>
          <p>
            <FormatMessage>{messages.order_id}</FormatMessage> 21
          </p>
        </div>
      </div>
    </ScreenWrapper>
  );
};

export default ThanksForOrdering;
