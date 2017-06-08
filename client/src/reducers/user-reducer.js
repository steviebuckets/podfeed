import {LOGIN_SUCCESS, REGISTER_USER_SUCCESS} from '../actions';

export default function userReducer(state = {}, action) {
  let token = "";
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('action', action);
      token = action.payload.data.token;
      localStorage.setItem('token', token);
      return Object.assign({}, state, {token: token})
    case REGISTER_USER_SUCCESS:
    console.log(action, "my payload")
      token = action.payload.data.token;
      localStorage.setItem('token', token);
      return Object.assign({}, state, {token: token})

    default:
      return state;
  }

}
