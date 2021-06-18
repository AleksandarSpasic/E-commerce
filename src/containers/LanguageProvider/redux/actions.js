import types from './types';

export const changeLocale = languageLocale => ({
  type: types.CHANGE_LOCALE,
  locale: languageLocale
});
