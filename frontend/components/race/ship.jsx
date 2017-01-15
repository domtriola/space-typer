import React from 'react';
import Moon from './moon.jsx';

const Ship = ({ yPos, xPos, colorPath }) => {
  const shipStyle = {
    top: yPos + 'px',
    left: xPos + '%'
  };

  return (
    <li style={shipStyle} className="ship">
      <img src={`/assets/${colorPath}`} />
    </li>
  );
};

export default Ship;
