import React from 'react';
import { Link } from 'react-router';

const Score = ({ score, user }) => {
  let userLink = null;
  if (user) {
    userLink = (
      <td>
        <Link to={`/users/${score.userId}`}>
          {score.username}
        </Link>
      </td>
    );
  }

  return (
    <tr>
      {userLink}
      <td>{score.wpm}</td>
      <td>{score.created_at}</td>
    </tr>
  );
};

export default Score;
