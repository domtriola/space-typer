import React from 'react';
import Leaderboard from '../leaderboard/leaderboard.jsx';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { scores: this.props.scores };
  }

  componentDidMount() {
    this.props.fetchScores();
  }

  componentWillReceiveProps(newProps) {
    this.setState({ scores: newProps.scores });
  }

  render() {
    return (
      <div className="home">
        <Link to="/race" className="race-btn">Race</Link>
        <Leaderboard scores={this.state.scores} />
      </div>
    );
  }
}

export default Home;
