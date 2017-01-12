import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import recentHighScoresReducer from './recent_high_scores_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  recentHighScores: recentHighScoresReducer
});

export default rootReducer;
