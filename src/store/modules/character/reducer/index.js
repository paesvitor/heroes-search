import {combineReducers} from 'redux';

import list from './list';
import show from './show';

// Actions
import comics from './comics';

export default combineReducers({
  list,
  show,
  comics,
});
