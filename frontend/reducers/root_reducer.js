import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import recentHighScoresReducer from './recent_high_scores_reducer';
import userStatsReducer from './user_stats_reducer';
import quoteReducer from './quote_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  recentHighScores: recentHighScoresReducer,
  userStats: userStatsReducer,
  quote: quoteReducer
});

export default rootReducer;
