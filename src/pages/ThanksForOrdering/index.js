import React from 'react';

import ScreenWrapper from 'components/helper/ScreenWrapper';
import messages from './messages';

const ThanksForOrdering = () => {
  return (
    <ScreenWrapper className="thanks_for_ordering" title={messages.helmet}>
      <div className="container">
        <div className="thanks_for_ordering_content">
          <h1>Thanks for ordering</h1>
          <p>Order date: 2020-02-03</p>
          <p>Order id: 21</p>
        </div>
      </div>
    </ScreenWrapper>
  );
};

export default ThanksForOrdering;
