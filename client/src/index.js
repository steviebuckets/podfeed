require('babel-polyfill');
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducer';
// import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { PodcastList } from '../containers/podcast-list-container';

const store = createStore(reducer, applyMiddleware(thunk));

// const routes = (
//   <Provider store={store}>
//     <Router history={hashHistory}>
//         <Route path="/" components={PodcastList}>
//             <IndexRoute components={LandingPage} />
//             <Route path="/signin" components={SignIn} />
//             <Route path="/register" components={Register} />
//         </Route>
//     </Router>
//     </Provider>
// );

render(
  <Provider store={store}>
    <PodcastList />
  </Provider>,
  document.getElementById('app')
);



//
// // import SignIn from './components/signin';
// // import Register from './components/register';
// // import LandingPage from './components/landing-page';
// // import App from './components/app';
// // import Podcast from './components/podcast';
// // import Test from './components/test.js'
//
// // import { PodcastListContainer } from './components/container';
//
// // const routes = (
// //   <Provider store={store}>
// //     <Router history={hashHistory}>
// //         <Route path="/" component={PodcastListContainer}>
// //             <IndexRoute component={LandingPage} />
// //             <Route path="/signin" component={SignIn} />
// //             <Route path="/register" component={Register} />
// //         </Route>
// //     </Router>
// //     </Provider>
// // );
//
// document.addEventListener('DOMContentLoaded', () =>
//   ReactDOM.render(
//     <Provider store={store}>
//     <PodcastList />
//     </Provider>,
//     document.getElementById('app'))
//   );
