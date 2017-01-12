import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS } from '../actions/session_actions';

const _defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, _defaultState, { currentUser: action.user });
    case RECEIVE_ERRORS:
      return merge({}, _defaultState, { errors: action.errors });
    default:
      return state;
  }
};

export default sessionReducer;
