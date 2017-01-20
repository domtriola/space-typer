import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app.jsx';
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';
import RaceContainer from './race/race_container';
import RaceResults from './race/race_results.jsx';
import UserProfileContainer from './user/user_profile_container';
import Disclaimer from './disclaimer/disclaimer.jsx';
import RaceAgain from './race/race_again.jsx';

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
            component={HomeContainer}
            onEnter={_ensureLoggedIn} />
          <Route path="/login"
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn} />
          <Route path="/signup"
            component={SessionFormContainer}
            onEnter={_redirectIfLoggedIn} />
          <Route path="/race"
            component={RaceContainer}
            onEnter={_ensureLoggedIn} />
          <Route path="/race-again"
            component={RaceAgain}
            onEnter={_ensureLoggedIn} />
          <Route path="/users/:id"
            component={UserProfileContainer}
            onEnter={_ensureLoggedIn} />
          <Route path="/disclaimer" component={Disclaimer}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
