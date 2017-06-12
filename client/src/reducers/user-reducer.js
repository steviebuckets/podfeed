import {LOGIN_SUCCESS, REGISTER_USER_SUCCESS} from '../actions';

export default function userReducer(state = {}, action) {
  let token = "";
  switch (action.type) {
    case LOGIN_SUCCESS:
      // console.log('actionzzzzz', action);
      token = action.payload.data.token;
      localStorage.setItem('token', token);
      location.replace('/');
      return Object.assign({}, state, {token: token})
    case REGISTER_USER_SUCCESS:
      console.log(action, '');
      console.log(action.payload, "my payload")

      token = action.payload.data.token;
      localStorage.setItem('token', token);
      location.replace('/');
      return Object.assign({}, state, {token: token})

    default:
      return state;
  }

}
