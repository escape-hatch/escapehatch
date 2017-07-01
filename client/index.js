import 'babel-polyfill';

import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
import { Main, Login, Signup, UserHome, Links } from './components';
import { me } from './reducer/user';
import { getLinksByErrId } from './reducer/link';

const whoAmI = store.dispatch(me());

const requireLogin = (nextRouterState, replace, next) =>
  whoAmI
    .then(() => {
      const { user } = store.getState();
      if (!user.id) replace('/login');
      next();
    })
    .catch(err => console.log(err));

function onLinksEnter(nextRouterState) {
  const errId = nextRouterState.params.errId
  store.dispatch(getLinksByErrId(errId))
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="home" component={UserHome} />
        <Route path="links/:errId" component={Links} onEnter={onLinksEnter}/>
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
        <Route onEnter={requireLogin}>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
