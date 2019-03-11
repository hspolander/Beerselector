import React from 'react';
import PropTypes from 'prop-types';

import { beerObj } from '../../types/index';
import './cell.scss';

const Cell = ({ size, value, onClickCell, beer }) => (
  <div className={`cell ${size}`}>
    {value && (
      <button onClick={() => onClickCell(beer)} type="button">
        {value}
      </button>
    )}
  </div>
);
Cell.propTypes = {
  size: PropTypes.string.isRequired,
  beer: beerObj,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClickCell: PropTypes.func.isRequired,
};

export default Cell;
