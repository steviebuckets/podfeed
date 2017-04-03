require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import SignIn from './components/signin';
import Register from './components/register';
import LandingPage from './components/landing-page';
// import App from './components/app';
// import Podcast from './components/podcast';
import PodcastList from './components/podcast-list';

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={PodcastList}>
            <IndexRoute component={LandingPage} />
            <Route path="/signin" component={SignIn} />
            <Route path="/register" component={Register} />
        </Route>
    </Router>
    </Provider>
);

document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(routes, document.getElementById('app'))
  );
