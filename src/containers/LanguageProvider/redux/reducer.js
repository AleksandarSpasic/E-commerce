import produce from 'immer';
import types from './types';
import { DEFAULT_LOCALE } from '../../../i18n';

export const initialState = {
  locale: DEFAULT_LOCALE
};

/* eslint-disable default-case */
const languageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.CHANGE_LOCALE:
        draft.locale = action.locale;
        break;
    }
  });

export default languageReducer;
