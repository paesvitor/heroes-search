import {combineReducers} from 'redux';

import list from './list';
import show from './show';

// Actions
import comics from './comics';
import favorites from './favorites';
import filter from './filter';

export default combineReducers({
  list,
  show,
  comics,
  favorites,
  filter,
});
