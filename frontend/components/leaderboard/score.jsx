import React from 'react';

const Score = ({ score }) => (
  <li>
    {score.username}
    {score.wpm}
    {score.created_at}
  </li>
);

export default Score;
