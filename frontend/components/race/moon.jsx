import React from 'react';

const Moon = ({ moon }) => (
  <li>
    <img
      className="moon"
      src={moon === 1 ? '/assets/moon.png' : 'assets/moon_half.png'} />
  </li>

);

export default Moon;
