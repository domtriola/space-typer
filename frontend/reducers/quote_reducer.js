import { RECEIVE_QUOTE, RECEIVE_USER_SCORE } from '../actions/quote_actions';
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  title: "",
  body: "",
  url: "",
  image_url: "",
  highScores: [],
  userScores: []
});

const quoteReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_QUOTE:
      return action.quote;
    case RECEIVE_USER_SCORE:
      nextState.userScores.unshift(action.score);
      return nextState;
    default:
      return state;
  }
};

export default quoteReducer;
