import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import podcastReducer from './podcast-reducer';

export default combineReducers({
  userReducer,
  podcastReducer
})
