import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_ERROR
} from '../actions';

const initialState = {
  loading: false,
  news: [],
  error: null
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload.news
      };

    case FETCH_NEWS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        news: []
      };

    default:
      return state;
  }
}
