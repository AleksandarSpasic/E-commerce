import { defineMessages } from 'react-intl';

export const scope = 'home';

export default defineMessages({
  helmet: {
    id: `${scope}.helmet`,
    defaultMessage: 'Home'
  },
  demo: {
    id: `${scope}.demo`,
    defaultMessage: 'Demo'
  },
  ecommerce: {
    id: `${scope}.ecommerce`,
    defaultMessage: 'Ecommerce'
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'Demo project to see if the candidate'
  },
  about2: {
    id: `${scope}.about2`,
    defaultMessage: 'is a good fit for the React/Redux position.'
  },
});
