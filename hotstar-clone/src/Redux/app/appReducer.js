import { SET_USER_LOGIN, SET_USER_LOGOUT } from "./appActionTypes";

const initialState = {
  email: "",
  photo: "",
  name: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOGIN: {
      return {
        ...state,
        email: action.payload.email,
        photo: action.payload.photo,
        name: action.payload.name,
      };
    }
    case SET_USER_LOGOUT: {
      return {
        ...state,
        email: null,
        photo: null,
        name: null,
      };
    }
    default:
      return state;
  }
};
