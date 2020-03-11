import {
  generateSagas,
  generateSagaDefaultRoot,
} from 'store/generators/generateSagas';
import {takeLatest, delay, call, put} from 'redux-saga/effects';
import api from 'api';
import types from './types';

const sagas = generateSagas(types);
const defaultRoot = generateSagaDefaultRoot(types, sagas);

function* root() {
  yield defaultRoot;
}

export default root;
