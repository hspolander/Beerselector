import { expect } from 'chai';
import {
  getPaginationSymbols,
  getPageAmount,
  toggleSortDirection,
  getEBCcolor,
} from '../src/components/util.js';

describe('The method getPaginationSymbols', () => {
  it('shall work for all values', () => {
    expect(getPaginationSymbols(5, 10)).to.deep.equal([
      1,
      '...',
      4,
      5,
      6,
      '...',
      10,
    ]);
    expect(getPaginationSymbols(4, 10)).to.deep.equal([1, 2, 3, 4, 5, '...', 10]);
    expect(getPaginationSymbols(9, 10)).to.deep.equal([1, '...', 6, 7, 8, 9, 10]);
  });
});

describe('The method getPageAmount', () => {
  it('shall return the correct value', () => {
    expect(getPageAmount(10, 100)).to.equal(10);
    expect(getPageAmount(5, 32)).to.equal(7);
    expect(getPageAmount(1, 3)).to.equal(3);
  });
});

describe('The method toggleSortDirection', () => {
  it('shall handle null asc and desc correctly', () => {
    expect(toggleSortDirection({sortDirection: 'desc'})).to.equal('asc');
    expect(toggleSortDirection({sortDirection: 'asc'})).to.equal('desc');
    expect(toggleSortDirection(null)).to.equal('asc');
  });
});

describe('The method getEBCcolor', () => {
  it('shall return the correct color code', () => {
    expect(getEBCcolor(5)).to.equal('#f6f513');
    expect(getEBCcolor(15)).to.equal('#d5bc26');
    expect(getEBCcolor(140)).to.equal('#000000');
    expect(getEBCcolor(180)).to.equal('#2e74be');
  });
});
