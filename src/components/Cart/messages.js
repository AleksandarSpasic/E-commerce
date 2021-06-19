import { defineMessages } from 'react-intl';

export const scope = 'cart';

export default defineMessages({
  cart: {
    id: `${scope}.cart`,
    defaultMessage: 'Cart'
  },
  total: {
    id: `${scope}.total`,
    defaultMessage: 'Total price: '
  },
  remove: {
    id: `${scope}.remove`,
    defaultMessage: 'remove'
  },
  checkout: {
    id: `${scope}.checkout`,
    defaultMessage: 'Checkout'
  },
  empty_cart: {
    id: `${scope}.empty_cart`,
    defaultMessage: 'Cart is empty'
  }
});
