import { RECEIVE_LEADERBOARD_SCORES } from
  '../actions/recent_leaderboard_actions';

const SessionReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LEADERBOARD_SCORES:
      return [...state, ...action.scores];
    default:
      return state;
  }
};

export default SessionReducer;
