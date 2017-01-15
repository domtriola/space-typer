import { RECEIVE_USER_STATS } from '../actions/user_stats_actions';

const _defaultState = Object.freeze({
  username: null,
  avg_wpm: null,
  avg_last_ten: null,
  max_wpm: null,
  total_races: null,
  total_won: null
});

const userStatsReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER_STATS:
      return action.stats;
    default:
      return state;
  }
};

export default userStatsReducer;
