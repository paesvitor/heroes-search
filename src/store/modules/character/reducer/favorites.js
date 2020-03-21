import TYPES from '../types';

const initialState = {
  data: [],
  loading: true,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.favorite.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case TYPES.favorite.SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.character],
      };

    case TYPES.favorite.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
