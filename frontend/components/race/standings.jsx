import React from 'react';

const Standings = ({ userWPM, compWPMs }) => {
  const places = ["First", "Second", "Third"];
  const wpms = [userWPM, ...compWPMs].sort((x, y) => {
    if (x < y) return 1;
    else if (x > y) return -1;
    else return 0;
  });

  return (
    <div className="standings container">
      <h3>{places[wpms.indexOf(userWPM)]} Place!</h3>
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
            <td>Comp One</td>
            <td>{compWPMs[0]}</td>
            <td>{places[wpms.indexOf(compWPMs[0])]}</td>
          </tr>
          <tr>
            <td>Comp Two</td>
            <td>{compWPMs[1]}</td>
            <td>{places[wpms.indexOf(compWPMs[1])]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Standings;
