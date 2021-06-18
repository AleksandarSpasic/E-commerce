import produce from 'immer';
import types from './types';

export const initialState = {
  cartItems: []
};

/* eslint-disable default-case */
const cartReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_CART_ITEMS:
        draft.cartItems = action.payload;
        break;
    }
  });

export default cartReducer;
