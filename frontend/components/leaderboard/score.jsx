import React from 'react';

const Score = ({ score }) => (
  <tr>
    <td>{score.username}</td>
    <td>{score.wpm}</td>
    <td>{score.created_at}</td>
  </tr>
);

export default Score;
