import React from 'react';
import Score from './score.jsx';

const Scores = ({ scores, user }) => {
  const title = 'Recent High Scores';

  return (
    <div className="scores container">
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            {user ? <th>User</th> : ""}
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
    </div>
  );
};

export default Scores;
