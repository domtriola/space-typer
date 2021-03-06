import { RECEIVE_LEADERBOARD_SCORES } from
  '../actions/recent_leaderboard_actions';

const recentHighScoresReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LEADERBOARD_SCORES:
      return action.scores;
    default:
      return state;
  }
};

export default recentHighScoresReducer;
