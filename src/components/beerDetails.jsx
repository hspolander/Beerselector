import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { beerObj } from '../types/index.js';
import BeerDetailsSingleProp from './beerDetailsSingleProp';
import close from '../../img/close.png';
import { getEBCcolor } from './util.js';

import './beerDetails.scss';

const useOnClickOutside = (ref, handler) => {
  useEffect(
    () => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    [ref, handler],
  );
};

const BeerDetails = ({ beerDetailed, hideDetails }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => hideDetails());

  return (
    <div ref={ref} className="wrapper">
      <img
        className="close-icon"
        src={close}
        alt="close"
        onClick={() => hideDetails()}
      />
      <div className="beerDetails">
        <img src={beerDetailed.picture} alt="beer" />
        <div className="beerInformation">
          <BeerDetailsSingleProp title="Namn" value={beerDetailed.name} />
          <BeerDetailsSingleProp
            max={15}
            title="Alkoholhalt"
            value={beerDetailed.ABV}
            visualValue={beerDetailed.ABV}
          />
          <BeerDetailsSingleProp
            visualValue={beerDetailed.EBC}
            max={130}
            color={getEBCcolor(beerDetailed.EBC)}
            title="Ölstil(EBC/Färg)"
            value={`${beerDetailed.Style}(${beerDetailed.EBC})`}
          />
          <BeerDetailsSingleProp
            title="Bryggeri"
            value={beerDetailed.Brewery}
          />
          <BeerDetailsSingleProp
            title="Bryggd av"
            value={
              beerDetailed.Brewer &&
              `${beerDetailed.Brewer.first} ${beerDetailed.Brewer.last}`
            }
          />
          <BeerDetailsSingleProp
            max={100}
            title="Bitterhet (IBU)"
            value={beerDetailed.IBU}
            visualValue={beerDetailed.IBU}/>
        </div>
      </div>
    </div>
  );
};

BeerDetails.propTypes = {
  beerDetailed: beerObj,
  hideDetails: PropTypes.func.isRequired,
};

export default BeerDetails;
