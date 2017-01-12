import React from 'react';

const RaceText = ({ finished, current, remaining }) => (
  <div className="race-text">
    {finished.join(" ")}{" "}
    <span className="current-word">
      {current}
    </span>{" "}
    {remaining.join(" ")}
  </div>
);

export default RaceText;
