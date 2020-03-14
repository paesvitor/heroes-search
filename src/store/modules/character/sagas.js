import {
  generateSagas,
  generateSagaDefaultRoot,
} from 'store/generators/generateSagas';
import types from './types';

const sagas = generateSagas(types);
const defaultRoot = generateSagaDefaultRoot(types, sagas);

function* root() {
  yield defaultRoot;
}

export default root;
