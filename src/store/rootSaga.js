import {all} from 'redux-saga/effects';

import character from './modules/character/sagas';

export default function* rootSaga() {
  yield all([character()]);
}
