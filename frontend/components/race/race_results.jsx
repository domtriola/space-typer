import React from 'react';
import QuoteInfo from './quote_info.jsx';
import UserInfo from './user_info.jsx';
import Scores from '../scores/scores.jsx';

class RaceResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="race-results container">
        <QuoteInfo quote={this.props.quote} />
        <UserInfo
          scores={this.props.quote.userScores}
          userScore={this.props.userScore} />
        <div>
          <h2>All Time High Scores</h2>
          <Scores scores={this.props.quote.highScores} user={true} />
        </div>
      </div>
    );
  }
}

export default RaceResults;
