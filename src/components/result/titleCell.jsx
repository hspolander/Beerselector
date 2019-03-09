import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sortOptionsObj } from '../../types/index';
import { sortBeers } from '../actions';
import downChevron from '../../../img/down.png';
import upChevron from '../../../img/up.png';
import { toggleSortDirection } from '../util';
import './titleCell.scss';

const TitleCell = ({ value, identifier, size, sortOptions, ...props }) => {
  const [hover, onHover] = useState('');
  const isSorted = () => sortOptions && sortOptions.colSorted === identifier;
  return (
    <div className={`titleCell ${hover} ${size}`}>
      <button
        type="button"
        onMouseEnter={() => onHover('hover')}
        onMouseLeave={() => onHover('')}
        onClick={() =>
          props.sortBeers(identifier, toggleSortDirection(sortOptions))
        }
      >
        <p>{value}</p>
        {isSorted() && sortOptions.sortDirection === 'asc' && (
          <img src={downChevron} alt="down-chevron" />
        )}
        {isSorted() && sortOptions.sortDirection === 'desc' && (
          <img src={upChevron} alt="up-chevron" />
        )}
      </button>
    </div>
  );
};
TitleCell.propTypes = {
  value: PropTypes.string,
  sortOptions: sortOptionsObj,
  size: PropTypes.string.isRequired,
  identifier: PropTypes.string,
  sortBeers: PropTypes.func,
};

const mapStateToProps = state => ({
  sortOptions: state.beerReducer.beerSortOptions,
});

const mapDispatchToProps = {
  sortBeers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TitleCell);
