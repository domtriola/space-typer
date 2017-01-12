import React from 'react';
import UserStatsContainer from './user_stats_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <UserStatsContainer />
      </div>
    );
  }
}

export default UserProfile;
