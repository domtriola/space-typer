import React from 'react';

const UserStats = ({ stats }) => (
  <div className="container">
    <table className="user-stats">
      <tbody>
        <tr>
          <td>AVG All Time</td>
          <td>{Math.floor(stats.avg_wpm)}</td>
        </tr>
        <tr>
          <td>AVG Last Ten</td>
          <td>{Math.floor(stats.avg_last_ten)}</td>
        </tr>
        <tr>
          <td>Max WPM</td>
          <td>{stats.max_wpm}</td>
        </tr>
        <tr>
          <td>Total Races</td>
          <td>{stats.total_races}</td>
        </tr>
        <tr>
          <td>Total Won</td>
          <td>{stats.total_won}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default UserStats;
