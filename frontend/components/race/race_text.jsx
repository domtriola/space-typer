import React from 'react';

const RaceText = ({ finished, current, remaining, status }) => {
  const textStyle = {
    color: status ? "#008800" : "#9d301f",
    textDecoration: 'underline',
    fontWeight: 'bold',
  };

  return (
    <div className="race-text">
      {finished.join(" ")}{" "}
      <span style={textStyle}>
        {current}
      </span>{" "}
      {remaining.join(" ")}
    </div>
  );
};

export default RaceText;
