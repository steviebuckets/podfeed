require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducer from './reducers/index';
import {SignIn} from './components/signin';
import {LandingPage} from './components/landing-page';
import {App} from './components/app';
import {Router} from 'react-router';
import PodcastList from './containers/podcast-list-container';
import Register from './containers/register-container';
import Auth from './modules/Auth';
import { browserHistory } from 'react-router';
// import { RegisterUser } from './containers/register-container';

//remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const store = createStore(reducer, applyMiddleware(thunk));

// const routes = (
//     <MuiThemeProvider muiTheme={getMuiTheme()}>
//         <Provider store={store}>
//             <Router history={hashHistory}>
//                 <Route path="/" component={App}>
//                     <IndexRoute component={LandingPage}/>
//                     <Route path="/signin" component={SignIn}/>
//                     <Route path="/register" component={Register}/>
//                     <Route path="/podcast-lists" component={PodcastList}/>
//                 </Route>
//             </Router>
//         </Provider>
//     </MuiThemeProvider>
// );

const routes = {
    component: App,
    childRoutes: [

        {
            path: '/',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                  console.log('auth')
                    callback(null, PodcastList);
                } else {
                  console.log('not auth')
                    callback(null, LandingPage);
                }
            }
        }, {
            path: '/signin',
            component: SignIn
        }, {
            path: '/register',
            component: Register
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
        </MuiThemeProvider>, document.getElementById('app')); });
