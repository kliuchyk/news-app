import { loginRequest, loginSuccess, loginError } from './index';
import { userService } from '../userAuthService';

export function loginUser(user) {
  return dispatch => {
    dispatch(loginRequest());
    return userService(user)
      .then(userName => {
        dispatch(loginSuccess(userName));
        return user;
      })
      .catch(error => dispatch(loginError(error.message)));
  };
}
