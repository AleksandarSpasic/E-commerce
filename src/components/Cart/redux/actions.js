import types from './types';

export const fetchCartItems = () => ({
  type: types.FETCH_CART_ITEMS
});

export const setCartItems = payload => ({
  type: types.SET_CART_ITEMS,
  payload
});

export const addNewCart = (payload, closeModal) => ({
  type: types.ADD_NEW_CART_REQUEST,
  payload,
  closeModal
});

export const addNewCartSuccess = payload => ({
  type: types.ADD_NEW_CART_SUCCESS,
  payload
});