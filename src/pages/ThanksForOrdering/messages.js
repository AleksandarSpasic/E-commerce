import { defineMessages } from 'react-intl';

export const scope = 'thanks_for_ordering';

export default defineMessages({
  helmet: {
    id: `${scope}.helmet`,
    defaultMessage: 'Thanks For Ordering'
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Thanks for ordering'
  },
  order_date: {
    id: `${scope}.order_date`,
    defaultMessage: 'Order date:'
  },
  order_id: {
    id: `${scope}.order_id`,
    defaultMessage: 'Order id:'
  },
});
