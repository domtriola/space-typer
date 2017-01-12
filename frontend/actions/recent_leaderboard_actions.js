import * as APIUtil from '../util/stats_api_util';

export const RECEIVE_LEADERBOARD_SCORES = "RECEIVE_LEADERBOARD_SCORES";

export const receiveLeaderboardScores = scores => ({
  type: RECEIVE_LEADERBOARD_SCORES,
  scores
});

export const fetchLeaderBoardScores = user => dispatch => (
  APIUtil.fetchRecentHighScores()
    .then(scores => dispatch(receiveLeaderboardScores(scores)))
);
