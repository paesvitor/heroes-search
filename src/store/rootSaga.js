import {all} from 'redux-saga/effects';

import hero from './modules/hero/sagas';

export default function* rootSaga() {
  yield all([hero()]);
}
