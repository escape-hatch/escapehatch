import 'babel-polyfill';

// import mainCSS from './components/scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import store from './store';
import { Main, Login, Signup, UserHome, Links, Home, LinksDummy } from './components';
import { me } from './reducer/user';
import { getLinksByErrId, getUserUpvotes } from './reducer/link';

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
  const errId = nextRouterState.params.errId;
  store.dispatch(getLinksByErrId(errId));
}

function onUserEnter(nextRouterState) {
  store.dispatch(getUserUpvotes());
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRedirect to="/home" />
        <Route path="home" component={Home} />
        <Route path="links/:errId" component={Links} onEnter={onLinksEnter} />
        <Route path="linksDummy/:errId" component={LinksDummy} onEnter={onLinksEnter} />
        <Route path="user" component={UserHome} onEnter={onUserEnter} />
        <Route path="login" component={Login} />
        <Route path="signup" component={Signup} />
        <Route onEnter={requireLogin}>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
