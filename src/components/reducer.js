import _ from 'lodash';
import {
  FETCH_BEERS_FULFILLED,
  FETCH_BEERS_REJECTED,
  FETCH_BEERS,
  SORT_BEERS,
  FILTER_BEERS,
  SHOW_BEER_DETAILS,
  HIDE_BEER_DETAILS,
} from './constants';

const initialState = {
  beers: null,
  filteredBeers: null,
  beerDetailed: null,
  beerSortOptions: null,
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
    case FETCH_BEERS: {
      return { ...state };
    }
    case SORT_BEERS: {
      return {
        ...state,
        beerSortOptions: {
          colSorted: action.payload.colSorted,
          sortDirection: action.payload.sortDirection,
        },
        beers: _.orderBy(
          state.beers,
          [action.payload.colSorted],
          [action.payload.sortDirection],
        ),
      };
    }
    case FILTER_BEERS: {
      return {
        ...state,
        filteredBeers: _.filter(
          state.beers,
          item =>
            item[action.payload.searchType].toLowerCase().indexOf(action.payload.value.toLowerCase()) > -1,
          )
      };
    }
    case SHOW_BEER_DETAILS: {
      return { ...state, beerDetailed: action.payload };
    }
    case HIDE_BEER_DETAILS: {
      return { ...state, beerDetailed: null };
    }
    default: {
      return { ...state };
    }
  }
}
