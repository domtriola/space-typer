import { RECEIVE_QUOTE } from '../actions/quote_actions';

const _defaultState = Object.freeze({
  title: "",
  body: "",
  url: "",
  image_url: ""
});

const quoteReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_QUOTE:
      return action.quote;
    default:
      return state;
  }
};

export default quoteReducer;
