import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { getPaginationSymbols, getPageAmount } from '../util';
import Pagination from './pagination';
import TitleRow from './titleRow';
import Row from './row';
import './table.scss';

import { beerListObj, titlesListObj } from '../../types/index.js';

const Table = ({ beers, rowsPerPage, titlesList, onClickCell }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  return (
    <div className="tableWithPagination">
      <TitleRow titlesList={titlesList} />
      {beers.length > 1 ? (
        _.chunk(beers, rowsPerPage)[selectedPage - 1].map((row, index) => (
          <Row
            className={index != null && index % 2 !== 0 ? 'even' : 'odd'}
            identifier={index + rowsPerPage * (selectedPage - 1)}
            key={row._id}
            row={row}
            onClickCell={onClickCell}
            titlesList={titlesList}
          />
        ))
      ) : (
        <div className="noResult">Inget resultat</div>
      )}
      <Pagination
        lastPage={getPageAmount(rowsPerPage, beers.length)}
        onClick={page => setSelectedPage(page)}
        paginationNavigationSymbols={getPaginationSymbols(
          selectedPage,
          getPageAmount(rowsPerPage, beers.length),
        )}
        selectedPage={selectedPage}
      />
    </div>
  );
};
Table.propTypes = {
  beers: beerListObj,
  titlesList: titlesListObj,
  rowsPerPage: PropTypes.number.isRequired,
  onClickCell: PropTypes.func.isRequired,
};

export default Table;
