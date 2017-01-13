import { connect } from 'react-redux';
import Home from './home.jsx';
import { fetchLeaderBoardScores } from
  '../../actions/recent_leaderboard_actions';

const mapStateToProps = ({ recentHighScores }) => ({
  scores: recentHighScores
});

const mapDispatchToProps = dispatch => ({
  fetchScores: () => dispatch(fetchLeaderBoardScores())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
