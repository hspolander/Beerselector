import {
  FETCH_BEERS_FULFILLED,
  FETCH_BEERS_REJECTED,
  FETCH_BEERS_NO_MATCH,
  FETCH_BEERS,
  SORT_BEERS,
  FILTER_BEERS,
  SHOW_BEER_DETAILS,
  HIDE_BEER_DETAILS,
} from './constants';

const initialState = {
  beers: null,
  beerDetailed: null,
  error: null,
};

export default function beerReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BEERS_FULFILLED: {
      return { ...state, beers: action.payload };
    }
    case FETCH_BEERS_REJECTED: {
      return { ...state };
    }
    case FETCH_BEERS_NO_MATCH: {
      return { ...state };
    }
    case FETCH_BEERS: {
      return { ...state };
    }
    case SORT_BEERS: {
      return { ...state };
    }
    case FILTER_BEERS: {
      return { ...state };
    }
    case SHOW_BEER_DETAILS: {
      return { ...state };
    }
    case HIDE_BEER_DETAILS: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}
