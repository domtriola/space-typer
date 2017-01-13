import React from 'react';

const Score = ({ score, user }) => (
  <tr>
    {user ? <td>{score.username}</td> : null}
    <td>{score.wpm}</td>
    <td>{score.created_at}</td>
  </tr>
);

export default Score;
