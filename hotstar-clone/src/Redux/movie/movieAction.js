import { SET_MOVIES } from "./movieActionTypes";

export const setMovies = (payload) => {
  return {
    type: SET_MOVIES,
    payload,
  };
};
