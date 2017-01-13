import React from 'react';
import Moon from './moon.jsx';

const RaceTrack = ({ moons }) => (
  <div className="race-track">
    <ul className="moons">
      {moons.map((moon, i) => <Moon key={i} moon={moon} />)}
    </ul>
  </div>
);

export default RaceTrack;
