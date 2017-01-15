import React from 'react';
import Moon from './moon.jsx';
import PlayerShip from './player_ship.jsx';
import CompShip from './comp_ship.jsx';

const colorPaths = ["spaceship_orange.png",
                    "spaceship_blue.png"];

const RaceTrack = ({ moons, playerShip, compShips }) => (
  <div className="race-track">
    <ul className="moons">
      {moons.map((moon, i) => <Moon key={i} moon={moon} />)}
    </ul>
    <h4 className="begin-text">
      {moons.every(moon => moon === 1) ?
        "" : "Begin Typing When the Moons are Full"}
    </h4>
    <div className="track">
      <ul className="ships">
        <PlayerShip pos={playerShip} />
        {compShips.map((ship, i) => (
          <CompShip
            colorPath={colorPaths[i]}
            key={i} pos={ship} />
        ))}
      </ul>
      <div className="planet">
        <img src="/assets/earth.png" />
      </div>
    </div>
  </div>
);

export default RaceTrack;
