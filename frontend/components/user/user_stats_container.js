import { connect } from 'react-redux';
import UserStats from './user_stats.jsx';
import { fetchUserStats } from
  '../../actions/user_stats_actions';

const mapStateToProps = ({ session, userStats }, { params }) => ({
  currentUser: session.currentUser,
  stats: userStats,
  params
});

const mapDispatchToProps = dispatch => ({
  fetchStats: id => dispatch(fetchUserStats(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStats);
