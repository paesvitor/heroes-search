import TYPES from '../types';

const initialState = {
  data: {},
  loading: true,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.show.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case TYPES.show.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case TYPES.show.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
