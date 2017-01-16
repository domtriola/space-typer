import React from 'react';

const Standings = ({ userWPM, compWPMs, wpms }) => {
  const places = ["First", "Second", "Third"];

  return (
    <div className="standings container">
      <h3>{places[wpms.indexOf(userWPM)]} Place</h3>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>WPM</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>You</td>
            <td>{userWPM}</td>
            <td>{places[wpms.indexOf(userWPM)]}</td>
          </tr>
          <tr>
            <td>Orange</td>
            <td>{compWPMs[0]}</td>
            <td>{places[wpms.indexOf(compWPMs[0])]}</td>
          </tr>
          <tr>
            <td>Teal</td>
            <td>{compWPMs[1]}</td>
            <td>{places[wpms.indexOf(compWPMs[1])]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Standings;
