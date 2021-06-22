import { SET_USER_LOGIN, SET_USER_LOGOUT } from "./appActionTypes";

export const setUserLogin = (payload) => {
  return {
    type: SET_USER_LOGIN,
    payload,
  };
};

export const setUserLogout = () => {
  return {
    type: SET_USER_LOGOUT,
  };
};
