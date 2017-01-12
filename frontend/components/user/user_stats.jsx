import React from 'react';

class UserStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.stats;
  }

  componentDidMount() {
    this.props.fetchStats(this.props.params.id);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.stats);
  }

  render() {
    return(
      <div className="user-stats">
        <h2>User Stats</h2>
        <table>
          <tbody>
            <tr>
              <td>AVG All Time</td>
              <td>{this.state.avg_wpm}</td>
            </tr>
            <tr>
              <td>AVG Last Ten</td>
              <td>{this.state.avg_last_ten}</td>
            </tr>
            <tr>
              <td>Max WPM</td>
              <td>{this.state.max_wpm}</td>
            </tr>
            <tr>
              <td>Total Races</td>
              <td>{this.state.total_races}</td>
            </tr>
            <tr>
              <td>Total Won</td>
              <td>{this.state.total_won}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserStats;
