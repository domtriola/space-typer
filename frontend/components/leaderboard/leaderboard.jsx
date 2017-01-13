import React from 'react';
import Score from './score.jsx';

const Leaderboard = ({ scores }) => (
  <div className="leaderboard container">
    <h2>Recent High Scores</h2>
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>WPM</th>
          <th>Time Ago</th>
        </tr>
      </thead>
      <tbody>
        {scores.map((score, i) => (
          <Score key={i} score={score} />
        ))}
      </tbody>
    </table>
  </div>
);

export default Leaderboard;
