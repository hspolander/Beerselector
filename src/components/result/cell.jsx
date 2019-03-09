import React from 'react';
import PropTypes from 'prop-types';

import './cell.scss';

const Cell = ({ size, cell }) => (
  <div className={`cell ${size}`}>
    {cell && <button type="button">{cell}</button>}
  </div>
);
Cell.propTypes = {
  size: PropTypes.string.isRequired,
  cell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Cell;
