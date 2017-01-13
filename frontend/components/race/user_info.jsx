import React from 'react';

const UserInfo = ({ scores, userScore }) => (
  <div className="user-info">
    <h3>Your Stats for this Quote</h3>
    <p>WPM: {userScore.wpm}</p>
    <p>Place: {userScore.won}</p>

    Previous Scores for this Quote:
    <table>
      <thead>
        <th>
          <td>WPM</td>
          <td>Time Ago</td>
        </th>
      </thead>
      <tbody>
        {scores.map((score, i) => (
          <tr>
            <td>{score.wpm}</td>
            <td>{score.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UserInfo;
