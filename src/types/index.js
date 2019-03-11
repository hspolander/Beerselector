import { shape, number, string, arrayOf, oneOfType } from 'prop-types';

export const beerObj = shape({
  ABV: number,
  Brewer: shape({
    first: string,
    last: string,
  }),
  Brewery: string,
  Country: string,
  Description: string,
  EBC: number,
  IBU: number,
  Style: string,
  index: number,
  name: string,
  picture: string,
  _id: string,
});

export const beerListObj = arrayOf(beerObj);

export const errorObj = shape({
  error: string,
  message: string,
});

export const sortOptionsObj = shape({
  colSorted: oneOfType([string, number]),
  sortDirection: string,
});

const titleObj = shape({
  colName: string,
  coltitle: string,
  colSize: string,
});

export const titlesListObj = arrayOf(titleObj);
