import React from 'react';
import PropTypes from 'prop-types';
import { Circle } from 'rc-progress';

import './valueVisualRepresentation.scss';

const ValueVisualRepresentation = ({ value, max, title, color }) => (
  <div className="floatingVisualization">
    <p>{`${title} ${value}/${max}`}</p>
    <div className="valueCircle">
      <Circle
        percent={(value * 100) / max}
        strokeWidth="5"
        strokeLinecap="square"
        strokeColor={color || '#2e74be'}
      />
    </div>
  </div>
);
ValueVisualRepresentation.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ValueVisualRepresentation;
