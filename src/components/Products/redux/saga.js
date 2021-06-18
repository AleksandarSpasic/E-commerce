import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { setProducts } from './actions';
import types from './types';

export function* fetchProducts() {
  try {
    const { data } = yield call(request, {
      url: 'products',
      method: 'get'
    });

    yield put(setProducts(data));
  } catch (error) {}
}

export default function* productsSaga() {
  yield takeLatest(types.FETCH_PRODUCTS, fetchProducts);
}
