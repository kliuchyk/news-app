import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/';

const initialState = {
  loggedIn: false,
  name: 'Unknown User',
  error: null
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loggedIn: false,
        error: null
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        name: action.payload.user,
        loggedIn: true
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loggedIn: false,
        error: action.payload.error,
        name: 'Unknown User'
      };

    default:
      return state;
  }
}
