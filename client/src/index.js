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
import {Register} from './components/register';
import {LandingPage} from './components/landing-page';
import {App} from './components/app';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import PodcastList from './containers/podcast-list-container';
// import { RegisterUser } from './containers/register-container';

//remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const store = createStore(reducer, applyMiddleware(thunk));

const routes = (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={LandingPage}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/podcast-lists" component={PodcastList}/>
                </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(routes, document.getElementById('app'));
});
