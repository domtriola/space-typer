import React from 'react';
import Score from './score.jsx';

const Scores = ({ scores, user }) => (
  <table className="scores">
    <thead>
      <tr>
        {user ? <th>User</th> : null}
        <th>WPM</th>
        <th>Time Ago</th>
      </tr>
    </thead>
    <tbody>
      {scores.map((score, i) => (
        <Score key={i} score={score} user={user} />
      ))}
    </tbody>
  </table>
);

export default Scores;
