import types from './types';

export const fetchProducts = () => ({
  type: types.FETCH_PRODUCTS
});

export const setProducts = payload => ({
  type: types.SET_PRODUCTS,
  payload
});
