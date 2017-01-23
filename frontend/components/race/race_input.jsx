import React from 'react';

const RaceInput = ({ userInput, updateInput, status, over }) => {
  const inputStyle = {
    backgroundColor: status ? null : "#9d301f",
    color: status ? null : "#fff"
  };

  return (
    <div className="race-input">
      <input
        style={inputStyle}
        autoFocus
        type="text"
        value={userInput}
        onChange={updateInput}
        disabled={over} />
    </div>
  );
};

export default RaceInput;
