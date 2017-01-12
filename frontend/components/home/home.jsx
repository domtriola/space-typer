import React from 'react';
import LeaderboardContainer from '../leaderboard/leaderboard_container';
import { Link } from 'react-router';

const Home = () => (
  <div className="home">
    <Link to="/race" className="race-btn">Race</Link>
    <LeaderboardContainer />
  </div>
);

export default Home;
