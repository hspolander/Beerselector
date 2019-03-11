import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { beerObj, titlesListObj } from '../../types/index.js';
import Cell from './cell';
import './row.scss';

const Row = ({ row, className, titlesList, onClickCell }) => {
  const [hover, onHover] = useState('');
  return (
    <div
      onMouseEnter={() => onHover('hover')}
      onMouseLeave={() => onHover('')}
      className={`row ${className} ${hover}`}
    >
      {titlesList.map((title, index) => (
        <Cell
          value={row[title.colName]}
          beer={row}
          key={`${index}${row._id}`}
          onClickCell={onClickCell}
          size={title.colSize}
        />
      ))}
    </div>
  );
};

Row.propTypes = {
  titlesList: titlesListObj,
  className: PropTypes.string,
  row: beerObj,
  onClickCell: PropTypes.func,
};

export default Row;
