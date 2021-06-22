import { combineReducers } from "redux";
import { appReducer } from "./app/appReducer";
import { createStore } from "redux";
import { movieReducer } from "./movie/movieReducer";

const reducers = combineReducers({
  app: appReducer,
  movie: movieReducer,
});

export const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
