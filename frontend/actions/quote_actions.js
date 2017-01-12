import * as APIUtil from '../util/quote_api_util';

export const RECEIVE_QUOTE = "RECEIVE_QUOTE";

export const receiveQuote = quote => ({
  type: RECEIVE_QUOTE,
  quote
});

export const fetchRandomQuote = () => dispatch => (
  APIUtil.fetchRandomQuote()
    .then(quote => dispatch(receiveQuote(quote)))
);
