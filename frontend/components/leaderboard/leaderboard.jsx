import React from 'react';
import Score from './score.jsx';

class Leaderboard extends React.Component {
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
      <div className="leaderboard container">
        <h2>Recent High Scores</h2>
        <table>
          <tr>
            <th>User</th>
            <th>WPM</th>
            <th>Time Ago</th>
          </tr>
          {this.state.scores.map((score, i) => (
            <Score key={i} score={score} />
          ))}
        </table>
      </div>
    );
  }
}

export default Leaderboard;
