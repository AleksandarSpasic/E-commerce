import types from './types';

export const fetchCartItems = () => ({
  type: types.FETCH_CART_ITEMS
});

export const setCartItems = payload => ({
  type: types.SET_CART_ITEMS,
  payload
});
