import React from 'react';
import { connect } from 'react-redux';

import { beerObj, errorObj } from '../types/index';
import { hideDetails } from './actions';
import BeerDetails from './beerDetails';
import Search from './search';

const ViewBeers = ({ beerDetailed, hideDetails }) => (
  <div>
    <Search classname={beerDetailed && 'fade'} />
    {beerDetailed && (
      <BeerDetails hideDetails={hideDetails} beerDetailed={beerDetailed} />
    )}
  </div>
);
ViewBeers.propTypes = {
  beerDetailed: beerObj,
};

const mapDispatchToProps = {
  hideDetails,
};

const mapStateToProps = state => ({
  beerDetailed: state.beerReducer.beerDetailed,
  error: state.beerReducer.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewBeers);
