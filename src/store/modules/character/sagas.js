import {
  generateSagas,
  generateSagaDefaultRoot,
} from 'store/generators/generateSagas';
import {takeLatest, put, select} from 'redux-saga/effects';
import types from './types';

const sagas = generateSagas(types);
const defaultRoot = generateSagaDefaultRoot(types, sagas);

function* favorite({payload}) {
  const {id} = payload;
  try {
    const characters = yield select(state => state.character.list.data.results);
    const character = yield characters.find(c => c.id === id);

    yield put({
      type: types.favorite.SUCCESS,
      character,
    });
  } catch (error) {
    yield put({
      type: types.favorite.FAILURE,
    });
  }
}

function* root() {
  yield takeLatest(types.favorite.REQUEST, favorite);
  yield defaultRoot;
}

export default root;
