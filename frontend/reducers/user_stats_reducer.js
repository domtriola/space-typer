import { RECEIVE_USER_STATS } from '../actions/user_stats_actions';

const userStatsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER_STATS:
      return action.stats;
    default:
      return state;
  }
};

export default userStatsReducer;
