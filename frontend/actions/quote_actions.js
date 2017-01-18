import * as APIUtil from '../util/quote_api_util';

export const RECEIVE_QUOTE = "RECEIVE_QUOTE";
export const RESET_QUOTE = "RESET_QUOTE";
export const RECEIVE_USER_SCORE = "RECEIVE_USER_SCORE";

export const receiveQuote = quote => ({
  type: RECEIVE_QUOTE,
  quote
});

export const resetQuote = () => ({
  type: RESET_QUOTE
});

export const receiveUserScore = score => ({
  type: RECEIVE_USER_SCORE,
  score
});

export const fetchRandomQuote = () => dispatch => (
  APIUtil.fetchRandomQuote()
    .then(quote => dispatch(receiveQuote(quote)))
);
