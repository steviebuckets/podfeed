import {LOGIN_SUCCESS} from '../actions';


export default function userReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('action', action);
      let token = action.payload.data.token;
      localStorage.setItem('token', token);
      return Object.assign({}, state, {
        token: token
      })
      default:
        return state;
  }

  }
