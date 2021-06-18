import produce from 'immer';
import types from './types';

export const initialState = {
  cartItems: [],
  newCartData: null
};

/* eslint-disable default-case */
const cartReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_CART_ITEMS:
        draft.cartItems = action.payload;
        break;
      case types.ADD_NEW_CART_SUCCESS:
        draft.newCartData = action.payload;
        break;
    }
  });

export default cartReducer;
