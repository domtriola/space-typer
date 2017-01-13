import React from 'react';
import Moon from './moon.jsx';

const PlayerShip = ({ pos, colorPath }) => {
  return (
    <li className="ship">
      <img src={`/assets/spaceship_red.png`} />
    </li>
  );
};

export default PlayerShip;
