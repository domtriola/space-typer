import React from 'react';
import UserStats from './user_stats.jsx';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.stats;
  }

  componentDidMount() {
    this.props.fetchStats(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.id !== newProps.params.id) {
      this.props.fetchStats(newProps.params.id);
    }

    this.setState(newProps.stats);
  }

  render() {
    return(
      <div className="user-profile">
        <h2>
          <img alt="red spaceship" src="/assets/spaceship_red.png" />
          {this.state.username}
        </h2>
        <UserStats stats={this.state} />
      </div>
    );
  }
}

export default UserProfile;
