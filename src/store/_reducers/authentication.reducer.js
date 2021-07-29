import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user , errorMessage : "no error" , error : false} : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        error:false
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        error:false
      };
    case userConstants.LOGIN_FAILURE:
      return {
        errorMessage: "Login Failed",
        error :true

      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}