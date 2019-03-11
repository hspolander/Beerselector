export const getPaginationSymbols = (selectedPage, pageAmount) => {
  let paginationSymbols = [];
  if (pageAmount < 8) {
    for (let i = 1; i <= pageAmount; i += 1) {
      paginationSymbols.push(i);
    }
  } else if (selectedPage < 5) {
    paginationSymbols = [1, 2, 3, 4, 5, '...', pageAmount];
  } else if (selectedPage > pageAmount - 4) {
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
  if (EBC < 9) {
    return '#f6f513';
  }
  if (EBC < 15) {
    return '#ece61a';
  }
  if (EBC < 25) {
    return '#d5bc26';
  }
  if (EBC < 30) {
    return '#bf923b';
  }
  if (EBC < 38) {
    return '#bf813a';
  }
  if (EBC < 45) {
    return '#bc6733';
  }
  if (EBC < 50) {
    return '#030403';
  }
  if (EBC < 60) {
    return '#030403';
  }
  if (EBC < 70) {
    return '#030403';
  }
  if (EBC < 80) {
    return '#030403';
  }
  if (EBC < 90) {
    return '#030403';
  }
  if (EBC < 100) {
    return '#030403';
  }
  if (EBC < 150) {
    return '#000000';
  }
  return '#2e74be';
};
