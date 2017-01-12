import * as APIUtil from '../util/stats_api_util';

export const RECEIVE_USER_STATS = "RECEIVE_STATS";

export const receiveUserStats = stats => ({
  type: RECEIVE_USER_STATS,
  stats
});

export const fetchUserStats = id => dispatch => (
  APIUtil.fetchUserStats(id)
    .then(stats => receiveUserStats(stats))
);
