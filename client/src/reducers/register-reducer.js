import {REGISTER_USER_SUCCESS} from '../actions';

export default function registerReducer(state = {}, action) {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      console.log('stves action', action.payload);
      let token = action.payload.token;
      localStorage.setItem('token', token);
      return Object.assign({}, state, {
        token: token
      })
      default:
        return state;
  }

  }
