import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { setCartItems } from './actions';
import types from './types';

export function* fetchCartItems() {
  try {
    const { data } = yield call(request, {
      url: 'carts',
      method: 'get'
    });

    yield put(setCartItems(data));
  } catch (error) {}
}

export default function* cartSaga() {
  yield takeLatest(types.FETCH_CART_ITEMS, fetchCartItems);
}
