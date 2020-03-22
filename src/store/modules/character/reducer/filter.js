import TYPES from '../types';

const initialState = {
  activeFilter: 'alphabetic',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.filter.REQUEST:
      return {
        activeFilter: action.payload,
      };

    case TYPES.list.REQUEST:
      return {
        activeFilter: 'alphabetic',
      };

    default:
      return state;
  }
};
