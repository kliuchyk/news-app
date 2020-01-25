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
