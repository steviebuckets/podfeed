import {LOGIN_SUCCESS, REGISTER_USER_SUCCESS} from '../actions';

export default function userReducer(state = {}, action) {
  let token = "";
  switch (action.type) {
    case LOGIN_SUCCESS:
      token = action.payload.data.token;
      localStorage.setItem('token', token);
      location.replace('/');
      return Object.assign({}, state, {token: token})
    case REGISTER_USER_SUCCESS:
      token = action.payload.data.token;
      localStorage.setItem('token', token);
      location.replace('/');
      return Object.assign({}, state, {token: token})

    default:
      return state;
  }

}
