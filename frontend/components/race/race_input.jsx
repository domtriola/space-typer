import React from 'react';

const RaceInput = ({ userInput, updateInput }) => (
  <div className="race-input">
    <input
      type="text"
      value={userInput}
      onChange={updateInput} />
  </div>
);

export default RaceInput;
