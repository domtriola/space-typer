import React from 'react';
import Moon from './moon.jsx';
import Ship from './ship.jsx';

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
        <Ship
          yPos="0"
          xPos={playerShip}
          colorPath="spaceship_red.png" />
        <Ship
          yPos="63.13"
          xPos={compShips[0]}
          colorPath="spaceship_orange.png" />
        <Ship
          yPos="126.25"
          xPos={compShips[1]}
          colorPath="spaceship_blue.png" />
      </ul>
      <div className="planet">
        <img src="/assets/earth.png" />
      </div>
    </div>
  </div>
);

export default RaceTrack;
