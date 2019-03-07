import React from 'react';
import { connect } from 'react-redux';

import { beerObj, errorObj } from '../types/index';
import Search from './search';
import './beerDetails.scss';

const BeerDetails = React.lazy(() => import('./beerDetails'));

const ViewBeers = ({ beerDetailed }) => (
  <div>
    <Search />
    {beerDetailed && <BeerDetails beerDetailed={beerDetailed} />}
  </div>
);
ViewBeers.propTypes = {
  beerDetailed: beerObj,
  error: errorObj,
};

const mapStateToProps = state => ({
  beerDetailed: state.beerReducer.beerDetailed,
  error: state.beerReducer.error,
});

export default connect(
  mapStateToProps,
  null,
)(ViewBeers);
