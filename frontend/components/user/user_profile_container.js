import { connect } from 'react-redux';
import UserProfile from './user_profile.jsx';
import { fetchUserStats } from
  '../../actions/user_stats_actions';

const mapStateToProps = ({ userStats }, { params }) => ({
  stats: userStats,
  params
});

const mapDispatchToProps = dispatch => ({
  fetchStats: id => dispatch(fetchUserStats(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
