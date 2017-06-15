require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
// import { render } from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducer from './reducers/index';
// import {SignIn} from './components/signin';
import {LandingPage} from './components/landing-page';

import App from './components/app';
// import {Router} from 'react-router';
import PodcastList from './containers/podcast-list-container';

import {Podcast} from './containers/podcast-container';
import Register from './containers/register-container';

import SignIn from './containers/login-container';
import Subscriptions from './containers/user-subscriptions-container';
import Auth from './modules/Auth';
// import {browserHistory} from 'react-router';

//remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const routes = {
  component: App,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          console.log('auth')
          callback(null, PodcastList, Podcast);
        } else {
          console.log('not auth')
          callback(null, LandingPage);
        }
      }
    }, {
      path: '/signin',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          console.log('auth')
          callback(null, PodcastList, Podcast);
        } else {
          // console.log('not auth')
          callback(null, SignIn);
        }
      }
    }, {
      path: '/register',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          console.log('auth')
          callback(null, PodcastList, Podcast);
        } else {
          console.log('not auth')
          callback(null, Register);
        }
      }
    }, {
      path: '/podcast',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          console.log('auth')
          callback(null, Podcast);
        } else {
          console.log('not auth')
          callback(null, Podcast);
        }
      }
    }, {
      path: '/podcast-list',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          console.log('auth')
          callback(null, PodcastList);
        } else {
          console.log('not auth')
          callback(null, SignIn);
        }
      }
    }, {
      path: '/subscriptions',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          console.log('auth')
          callback(null, Subscriptions);
        } else {
          console.log('not auth')
          callback(null, SignIn);
        }
      }
    }, {

      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        //changes the current URL to /
        replace('/');
      }
    }
  ]
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(

    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>
  </MuiThemeProvider>, document.getElementById('app'));
});
