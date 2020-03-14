import TYPES from '../types';

const initialState = {
  data: {},
  loading: true,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.comics.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case TYPES.comics.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case TYPES.comics.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
