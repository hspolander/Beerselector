import React from 'react';
import PropTypes from 'prop-types';

import Table from './table';
import { beerObj } from '../../types/index.js';

const titlesList = [
  { colName: 'name', colTitle: 'Namn', colSize: 'large' },
  { colName: 'ABV', colTitle: '%', colSize: 'small' },
  { colName: 'Country', colTitle: 'Land', colSize: 'small' },
  { colName: 'Style', colTitle: 'Stil', colSize: 'small' },
];

const Result = ({ beers, onClickCell }) => (
  <div>
    {beers && (
      <Table
        beers={beers}
        titlesList={titlesList}
        rowsPerPage={15}
        onClickCell={onClickCell}
      />
    )}
  </div>
);
Result.propTypes = {
  beers: PropTypes.arrayOf(beerObj),
  onClickCell: PropTypes.func.isRequired,
};

export default Result;
