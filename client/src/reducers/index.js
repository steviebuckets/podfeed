import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import registerReducer from './register-reducer';
import podcastReducer from './podcast-reducer';

export default combineReducers({
  users: userReducer,
  newUsers: registerReducer,
  podcasts: podcastReducer,

})
