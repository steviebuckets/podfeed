import {createStore, applyMiddleware} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as reducers from './reducers/index';

export default createStore(
  reducers.podcastsReducer, devToolsEnhancer(), /* preloadedState, */
  applyMiddleware(thunk)
);
