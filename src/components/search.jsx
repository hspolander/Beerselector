import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { beerListObj, sortOptionsObj } from '../types/index.js';
import { loadBeers } from './actions';
import './search.scss';

const Result = React.lazy(() => import('./result/result'));

const Search = ({ beers, sortOptions, ...props }) => {
  useEffect(() => {
    props.loadBeers();
  }, []);
  return (
    <div className="search">
      <Suspense fallback={<div>Loading...</div>}>
        <Result beers={beers} />
      </Suspense>
    </div>
  );
};

Search.propTypes = {
  beers: beerListObj,
  sortOptions: sortOptionsObj,
  loadBeers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  beers: state.beerReducer.beers,
});

const mapDispatchToProps = {
  loadBeers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
