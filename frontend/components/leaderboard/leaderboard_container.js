import { connect } from 'react-redux';
import Leaderboard from './leaderboard.jsx';
import { fetchLeaderBoardScores } from
  '../../actions/recent_leaderboard_actions';

// TODO
window.fetchLeaderBoardScores = fetchLeaderBoardScores;

const mapStateToProps = ({ recentHighScores }) => ({
  scores: recentHighScores
});

const mapDispatchToProps = dispatch => ({
  fetchScores: () => dispatch(fetchLeaderBoardScores())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard);
