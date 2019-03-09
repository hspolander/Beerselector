export const getPaginationSymbols = (selectedPage, pageAmount) => {
  let paginationSymbols = [];
  if (pageAmount < 10) {
    for (let i = 1; i <= pageAmount; i += 1) {
      paginationSymbols.push(i);
    }
  } else if (selectedPage < 4) {
    paginationSymbols = [1, 2, 3, 4, 5, '...', pageAmount];
  } else if (selectedPage > pageAmount - 3) {
    paginationSymbols = [
      1,
      '...',
      pageAmount - 4,
      pageAmount - 3,
      pageAmount - 2,
      pageAmount - 1,
      pageAmount,
    ];
  } else {
    paginationSymbols = [
      1,
      '...',
      selectedPage - 1,
      selectedPage,
      selectedPage + 1,
      '...',
      pageAmount,
    ];
  }
  return paginationSymbols;
};

export const getPageAmount = (rowsPerPage, length) =>
  Math.ceil(length / rowsPerPage);

export const toggleSortDirection = sortOptions =>
  sortOptions && sortOptions.sortDirection === 'asc' ? 'desc' : 'asc';
