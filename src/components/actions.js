import axios from 'axios';

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

export const loadBeers = () => dispatch => {
  dispatch({ type: FETCH_BEERS });
  axios
    .get(`/api`)
    .then(response => {
      if (response.data && response.data.length > 0) {
        dispatch({ type: FETCH_BEERS_FULFILLED, payload: response.data });
      } else {
        dispatch({ type: FETCH_BEERS_NO_MATCH, payload: response.data });
      }
    })
    .catch(err => {
      dispatch({ type: FETCH_BEERS_REJECTED, payload: err });
    });
};

export const showDetails = id => dispatch => {
  dispatch({ type: SHOW_BEER_DETAILS, id });
};

export const hideDetails = id => dispatch => {
  dispatch({ type: HIDE_BEER_DETAILS, id });
};

export const sortBeers = (col, direction) => dispatch => {
  dispatch({ type: SORT_BEERS, payload: { col, direction } });
};

export const filterBeers = value => dispatch => {
  dispatch({ type: FILTER_BEERS, payload: value });
};
