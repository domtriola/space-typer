import React from 'react';
import Scores from '../scores/scores.jsx';
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
        <div className="container">
          <h2>Recent Scores</h2>
          <Scores scores={this.state.scores} user={true} />
        </div>
      </div>
    );
  }
}

export default Home;
