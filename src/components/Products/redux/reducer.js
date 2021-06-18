import produce from 'immer';
import types from './types';

export const initialState = {
  products: []
};

/* eslint-disable default-case */
const productsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_PRODUCTS:
        draft.products = action.payload;
        break;
    }
  });

export default productsReducer;
