import React from 'react';
import PropTypes from 'prop-types';

import { beerObj } from '../types/index.js';
import './result.scss';

const Result = ({ beers }) => <div></div>;
Result.propTypes = {
  beers: PropTypes.arrayOf(beerObj),
};

export default Result;
