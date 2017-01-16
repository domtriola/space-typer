import React from 'react';
import Scores from '../scores/scores.jsx';

const UserInfo = ({ scores, userScore }) => (
  <div className="user-info col col-1-2">
    <h3>Your Stats for this Quote</h3>
    <p>WPM: {userScore.wpm}</p>
    <p>Place: {userScore.place}</p>

    <div>
      <h3>Previous Scores</h3>
      <Scores scores={scores} user={false} />
    </div>
  </div>
);

export default UserInfo;
