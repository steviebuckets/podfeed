require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducer';
import SignIn from './components/signin';
import Register from './components/register';
import { LandingPage } from './components/landing-page';
import { App } from './components/app';


import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import PodcastList from './containers/podcast-list-container';

const store = createStore(reducer, applyMiddleware(thunk));

const routes = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LandingPage}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/register" component={Register}/>

            </Route>
        </Router>
    </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(routes, document.getElementById('app'));
});
