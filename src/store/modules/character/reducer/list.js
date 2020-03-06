import TYPES from '../types';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.list.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case TYPES.list.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case TYPES.list.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case TYPES.create.SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};
