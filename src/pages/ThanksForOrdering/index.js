import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { makeSelectNewCartData } from 'components/Cart/redux/selectors';
import ScreenWrapper from 'components/helper/ScreenWrapper';
import FormatMessage from 'i18n/FormatMessage';
import routes from 'routes/pathnames';
import messages from './messages';

const ThanksForOrdering = () => {
  const data = useSelector(makeSelectNewCartData());
  const { push } = useHistory();

  useEffect(() => {
    if (!data) push(routes.HOME);
  }, [data, push]);

  return (
    <ScreenWrapper className='thanks_for_ordering' title={messages.helmet}>
      <div className='container'>
        {data && (
          <div className='thanks_for_ordering_content'>
            <h1>
              <FormatMessage>{messages.title}</FormatMessage>
            </h1>
            <p>
              <FormatMessage>{messages.order_date}</FormatMessage>
              {moment(data.date).format('YYYY-MM-DD')}
            </p>
            <p>
              <FormatMessage>{messages.order_id}</FormatMessage> {data.id}
            </p>
          </div>
        )}
      </div>
    </ScreenWrapper>
  );
};

export default ThanksForOrdering;
