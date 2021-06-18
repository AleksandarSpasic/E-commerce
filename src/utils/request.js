import { call } from 'redux-saga/effects';
import { camelCase, mapKeys } from 'lodash';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.response.use(
  response => mapKeys(response, (_, key) => camelCase(key)),
  error => Promise.reject(error.response)
);

export default function* request({ url, method, data, headers = {}, params = {} }) {
  try {
    return yield call(api, { method, url, headers, data, params });
  } catch (error) {
    throw error;
  }
}
