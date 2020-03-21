import {generateActions} from 'store/generators/generateActions';
import types from './types';

const actions = generateActions(types);

console.log(actions);

export default actions;
