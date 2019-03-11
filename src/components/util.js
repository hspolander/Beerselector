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

export const getEBCcolor = EBC => {
  if (EBC < 5) {
    return '#f9f853';
  }
  if (EBC < 7) {
    return '#f6f513';
  }
  if (EBC < 9) {
    return '#ece61a';
  }
  if (EBC < 13) {
    return '#d5bc26';
  }
  if (EBC < 17) {
    return '#bf923b';
  }
  if (EBC < 21) {
    return '#bf813a';
  }
  if (EBC < 27) {
    return '#bc6733';
  }
  if (EBC < 34) {
    return '#030403';
  }
  if (EBC < 40) {
    return '#030403';
  }
  if (EBC < 48) {
    return '#030403';
  }
  if (EBC < 58) {
    return '#030403';
  }
  if (EBC < 70) {
    return '#030403';
  }
  if (EBC < 80) {
    return '#030403';
  }
  if (EBC < 150) {
    return '#000000';
  }
  return '#2e74be';
};
