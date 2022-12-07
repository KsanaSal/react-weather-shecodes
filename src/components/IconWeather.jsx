import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 50,
  animate: true,
};

const IconWeather = ({ icon, color, size }) => (
  <ReactAnimatedWeather
    icon={icon ?? defaults.icon}
    color={color ?? defaults.color}
    size={size ?? defaults.size}
    animate={defaults.animate}
  />
);

export default IconWeather;
