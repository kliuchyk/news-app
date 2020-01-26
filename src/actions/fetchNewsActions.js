import { fetchNewsRequest, fetchNewsSuccess, fetchNewsError } from './index';

const apiKey = process.env.REACT_APP_NEWS_API_KEY;
const requestUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

export function fetchNews() {
  return dispatch => {
    dispatch(fetchNewsRequest());
    return fetch(requestUrl)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchNewsSuccess(json.articles));
        return json.articles;
      })
      .catch(error => dispatch(fetchNewsError(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
