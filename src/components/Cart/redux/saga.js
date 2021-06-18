import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import routes from 'routes/pathnames';
import request from 'utils/request';
import { addNewCartSuccess, setCartItems } from './actions';
import types from './types';

export function* addNewCart({ payload, closeModal }) {
  try {
    const { data } = yield call(request, {
      url: 'carts',
      method: 'post',
      data: payload
    });

    yield put(addNewCartSuccess(data));
    yield put(setCartItems([]));
    yield put(push(routes.THANKS_FOR_ORDERING));
    yield closeModal();
  } catch (error) {}
}

export default function* cartSaga() {
  yield takeLatest(types.ADD_NEW_CART_REQUEST, addNewCart);
}
