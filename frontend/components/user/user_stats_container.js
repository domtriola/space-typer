import { connect } from 'react-redux';
import UserStats from './user_stats.jsx';
import { fetchUserStats } from
  '../../actions/user_stats_actions';

const mapStateToProps = ({ userStats }) => ({
  stats: userStats
});

const mapDispatchToProps = dispatch => ({
  fetchStats: id => dispatch(fetchUserStats(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStats);
