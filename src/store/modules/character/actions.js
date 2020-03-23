import {generateActions} from 'store/generators/generateActions';
import types from './types';

const actions = generateActions(types);

export default actions;
