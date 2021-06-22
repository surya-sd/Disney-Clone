import { SET_MOVIES } from "./movieActionTypes";

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES: {
      return {
        ...state,
        recommend: action.payload.recommend,
        newDisney: action.payload.newDisney,
        original: action.payload.original,
        trending: action.payload.trending,
      };
    }
    default:
      return state;
  }
};
