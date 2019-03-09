import React from 'react';
import PropTypes from 'prop-types';

import './pagination.scss';
import leftChevron from '../../../img/back.png';
import rightChevron from '../../../img/next.png';

const Pagination = ({
  selectedPage,
  paginationNavigationSymbols,
  onClick,
  lastPage,
}) => {
  const pageList = [];
  for (let i = 0; i < paginationNavigationSymbols.length; i += 1) {
    let className;
    if (typeof paginationNavigationSymbols[i] === 'number') {
      className = 'unSelected';
    }
    pageList.push(
      <button
        type="button"
        key={i}
        className={
          selectedPage === paginationNavigationSymbols[i]
            ? 'pageNumber selected'
            : `pageNumber ${className}`
        }
        onClick={() => onClick(paginationNavigationSymbols[i])}
      >
        {paginationNavigationSymbols[i]}
      </button>,
    );
  }

  return (
    <div className="paginationContainer">
      <button
        type="button"
        className="pageNumber"
        onClick={() => selectedPage > 1 && onClick(selectedPage - 1)}
      >
        <img
          src={leftChevron}
          className={selectedPage > 1 ? 'active' : undefined}
          alt="left-chevron"
        />
      </button>
      {pageList}
      <button
        type="button"
        className="pageNumber"
        onClick={() => selectedPage < lastPage && onClick(selectedPage + 1)}
      >
        <img
          src={rightChevron}
          className={selectedPage < lastPage ? 'active' : undefined}
          alt="right-chevron"
        />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  paginationNavigationSymbols: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  selectedPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Pagination;
