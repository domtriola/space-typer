import React from 'react';
import Moon from './moon.jsx';

const CompShip = ({ pos, colorPath }) => {
  return (
    <li className="ship">
      <img src={`/assets/${colorPath}`} />
    </li>
  );
};

export default CompShip;
