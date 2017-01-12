import React from 'react';
import QuoteInfo from './quote_info.jsx';
import UserInfo from './user_info.jsx';

class RaceResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="race-results">
        <QuoteInfo quote={this.props.quote}/>
        <UserInfo />
      </div>
    );
  }
}

export default RaceResults;
