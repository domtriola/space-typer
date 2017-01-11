import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app.jsx';
import SessionFormContainer from './session/session_form_container';
import Home from './home/home';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser)
      replace("/login");
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser)
      replace("/");
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute
            component={Home}
            onEnter={_ensureLoggedIn} />
          <Route path="/login"
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn} />
          <Route path="/signup"
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
