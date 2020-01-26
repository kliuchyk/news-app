export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR';

export function fetchNewsRequest() {
  return {
    type: FETCH_NEWS_REQUEST
  };
}

export function fetchNewsSuccess(news) {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: { news }
  };
}

export function fetchNewsError(error) {
  return {
    type: FETCH_NEWS_ERROR,
    payload: { error }
  };
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: { user }
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    payload: { error }
  };
}
