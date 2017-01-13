import React from 'react';
import Scores from '../scores/scores.jsx';

const UserInfo = ({ scores, userScore }) => (
  <div className="user-info">
    <h3>Your Stats for this Quote</h3>
    <p>WPM: {userScore.wpm}</p>
    <p>Place: {userScore.won}</p>

    <p>Previous Scores for this Quote:</p>
    <Scores scores={scores} user={false} />
  </div>
);

export default UserInfo;
