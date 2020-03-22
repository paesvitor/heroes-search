import TYPES from '../types';

const initialState = {
  activeFilter: 'alphabetic',
  query: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.filter.REQUEST:
      return {
        activeFilter: action.payload,
      };

    case TYPES.list.REQUEST: {
      const query = action.payload?.params.nameStartsWith;

      return {
        activeFilter: 'alphabetic',
        query,
      };
    }

    default:
      return state;
  }
};
