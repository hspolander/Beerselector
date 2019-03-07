import { shape, number, string } from 'prop-types';

export const beerObj = shape({
  ABV: string,
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

export const errorObj = shape({
  error: string,
  message: string,
});
