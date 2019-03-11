import axios from 'axios';

import {
  FETCH_BEERS_FULFILLED,
  FETCH_BEERS_REJECTED,
  FETCH_BEERS,
  SORT_BEERS,
  FILTER_BEERS,
  SHOW_BEER_DETAILS,
  HIDE_BEER_DETAILS,
} from './constants';

export const loadBeers = () => dispatch => {
  dispatch({ type: FETCH_BEERS });
  axios
    .get(`/api`)
    .then(response => {
      dispatch({ type: FETCH_BEERS_FULFILLED, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_BEERS_REJECTED, payload: err });
    });
};

export const showDetails = beer => dispatch => {
  dispatch({ type: SHOW_BEER_DETAILS, payload: beer });
};

export const hideDetails = () => dispatch => {
  dispatch({ type: HIDE_BEER_DETAILS });
};

export const sortBeers = (colSorted, sortDirection) => dispatch => {
  dispatch({
    type: SORT_BEERS,
    payload: { colSorted, sortDirection },
  });
};

export const filterBeers = value => dispatch => {
  dispatch({ type: FILTER_BEERS, payload: value });
};
