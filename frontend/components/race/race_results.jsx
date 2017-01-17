import React from 'react';
import QuoteInfo from './quote_info.jsx';
import UserInfo from './user_info.jsx';
import Scores from '../scores/scores.jsx';

class RaceResults extends React.Component {
  constructor(props) {
    super(props);

    const newScore = {
      username: this.props.username,
      wpm: this.props.userScore.wpm,
      created_at: "just now"
    };
    let highScores = this.props.quote.highScores;
    highScores.push(newScore);

    this.state = { highScores };
  }

  componentWillReceiveProps(newProps) {
    debugger;
    const wpm = newProps.userScore.wpm;
    this.state.highScores.forEach(score => {
      if (score.created_at === "just now")
        score.wpm = wpm;
    });
    this.state.highScores = this.state.highScores.sort((x, y) => {
      if (x.wpm > y.wpm) return -1;
      else if (x.wpm < y.wpm) return 1;
      else return 0;
    });

    this.setState({ highScores: this.state.highScores });
  }

  // insertScore(score, highScores) {
  //   // debugger;
  //   for (let i = 0; i < highScores.length; i++) {
  //     if (score.wpm >= highScores[i].wpm)
  //       return highScores.splice(i, 0, score).splice(0, 10);
  //   }
  //
  //   if (highScores.length < 10) {
  //     highScores.push(score);
  //     return highScores;
  //   } else
  //     return highScores;
  // }

  render() {
    return (
      <div className="race-results container">
        <div className="quote-results">
          <QuoteInfo quote={this.props.quote} />
          <UserInfo
            scores={this.props.quote.userScores}
            userScore={this.props.userScore} />
        </div>
        <div className="high-scores">
          <h3>All Time High Scores</h3>
          <Scores scores={this.state.highScores} user={true} />
        </div>
      </div>
    );
  }
}

export default RaceResults;
