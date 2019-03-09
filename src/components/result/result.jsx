import React from 'react';
import PropTypes from 'prop-types';

import Table from './table';
import { beerObj } from '../../types/index.js';
import './result.scss';

const titlesList = [
  { colName: 'name', colTitle: 'Namn', colSize: 'large' },
  { colName: 'ABV', colTitle: '%', colSize: 'small' },
  { colName: 'Country', colTitle: 'Land', colSize: 'small' },
  { colName: 'Style', colTitle: 'Stil', colSize: 'small' },
];

const Result = ({ beers }) => (
  <div>
    {beers && <Table beers={beers} titlesList={titlesList} rowsPerPage={10} />}
  </div>
);
Result.propTypes = {
  beers: PropTypes.arrayOf(beerObj),
};

export default Result;
