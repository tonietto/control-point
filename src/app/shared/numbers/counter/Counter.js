import React, { PropTypes } from 'react';
import { Motion, spring, presets } from 'react-motion';
import { Statistic, Icon } from 'semantic-ui-react';

const propTypes = {
  number: PropTypes.number.isRequired,
  icon: PropTypes.string,
  size: PropTypes.string,
};


const Counter = ({ number, icon, size }) => (
  <Motion defaultStyle={{ x: 0 }} style={{ x: spring(number, presets.wobbly) }}>
    {
      (value) => {
        let base = 0.04;
        switch (size) {
          case 'mini':
            base = 0.015;
            break;
          case 'tiny':
            base = 0.02;
            break;
          case 'small':
            base = 0.03;
            break;
          case 'large':
            base = 0.05;
            break;
          case 'huge':
            base = 0.06;
            break;
          default:
            base = 0.04;
        }
        const fontSize = ((value.x * 100) / number) * base;

        return (
          <Statistic.Value style={{ fontSize: `${fontSize}rem` }}>
            {
              icon && <Icon name={icon} />
            }
            {Math.round(value.x)}
          </Statistic.Value>
        );
      }
    }
  </Motion>
);

Counter.propTypes = propTypes;

export default Counter;
