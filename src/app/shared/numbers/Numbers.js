import React, { PropTypes } from 'react';
import { Statistic } from 'semantic-ui-react';

import Counter from './counter/Counter';

const propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  header: PropTypes.string,
  icon: PropTypes.string,
  variation: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  inverted: PropTypes.bool,
};

const Numbers = ({
    value,
    label,
    header,
    icon,
    variation,
    color,
    size,
    inverted,
  }) => {
  const horizontal = variation === 'horizontal';

  return (
    <Statistic
      horizontal={horizontal}
      inverted={inverted}
      color={color}
      size={size}
    >
      {
        variation === 'upwards'
        ? <Statistic.Label>{label}</Statistic.Label>
        : ''
      }
      {
        header
        ? <Statistic.Label>{header}</Statistic.Label>
        : ''
      }
      <Counter size={size} number={value} icon={icon} />
      {
        variation !== 'upwards'
        ? <Statistic.Label>{label}</Statistic.Label>
        : ''
      }
    </Statistic>
  );
};

Numbers.propTypes = propTypes;

export default Numbers;
