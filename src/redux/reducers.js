import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'routes/history';
import cartReducer from 'components/Cart/redux/reducer';
import productsReducer from 'components/Products/redux/reducer';
import languageProviderReducer from 'containers/LanguageProvider/redux/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers
  });

  return rootReducer;
}
