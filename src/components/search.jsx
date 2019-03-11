import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import InputTextfieldSearch from './inputTextfieldSearch';
import Result from './result/result';
import { beerListObj, sortOptionsObj } from '../types/index.js';
import { loadBeers, filterBeers, showDetails } from './actions';
import './search.scss';

const Search = ({ beers, filteredBeers, sortOptions, classname, ...props }) => {
  useEffect(() => {
    props.loadBeers();
  }, []);
  return (
    <div className={`search ${classname}`}>
      <InputTextfieldSearch
        onSubmit={props.filterBeers}
      />
      <Result beers={filteredBeers || beers} onClickCell={props.showDetails} />
    </div>
  );
};

Search.propTypes = {
  beers: beerListObj,
  filteredBeers: beerListObj,
  sortOptions: sortOptionsObj,
  classname: PropTypes.string,
  loadBeers: PropTypes.func.isRequired,
  filterBeers: PropTypes.func.isRequired,
  showDetails: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  beers: state.beerReducer.beers,
  filteredBeers: state.beerReducer.filteredBeers,
});

const mapDispatchToProps = {
  loadBeers,
  filterBeers,
  showDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
