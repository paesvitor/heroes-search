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

    case TYPES.favorite.SUCCESS: {
      const {character} = action;
      const index = state.data.findIndex(item => item.id === character.id);
      let newData;

      if (index === -1 && state.data.length < 5) {
        newData = [...state.data, action.character];
      } else {
        newData = state.data.filter(item => item.id !== character.id);
      }

      return {
        ...state,
        loading: false,
        data: newData,
      };
    }

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
