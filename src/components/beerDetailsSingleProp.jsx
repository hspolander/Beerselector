import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ValueVisualRepresentation from './valueVisualRepresentation';
import './beerDetailsSingleProp.scss';

const BeerDetailsSingleProp = ({ title, value, max, color, visualValue }) => {
  const [hover, onHover] = useState();
  return (
    <div
      className="beerDetailProp"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {hover && visualValue && (
        <ValueVisualRepresentation
          max={max}
          value={parseFloat(visualValue)}
          title={title}
          color={color}
        />
      )}
      <span className="title">{title}</span>
      <span className="value">{value}</span>
    </div>
  );
};

BeerDetailsSingleProp.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  visualValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default BeerDetailsSingleProp;
