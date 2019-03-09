import React from 'react';

import { titlesListObj } from '../../types/index.js';
import TitleCell from './titleCell';
import './titleRow.scss';

const TitleRow = ({ titlesList }) => (
  <div className="titleRow">
    {titlesList.map((title, index) => (
      <TitleCell
        identifier={title.colName}
        key={index}
        size={title.colSize}
        value={title.colTitle}
      />
    ))}
  </div>
);

TitleRow.propTypes = {
  titlesList: titlesListObj,
};

export default TitleRow;
