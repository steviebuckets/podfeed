import {REGISTER_USER_SUCCESS} from '../actions';

export default function registerReducer(state = {}, action) {
  switch (action.type) {
    case 'REGISTER_USER_SUCCESS':
      console.log('actoin', action);
      let token = action.payload.data.token;
      localStorage.setItem('token', token);
      return Object.assign({}, state, {
        token: token
      })
      default:
        return state;
  }

  }
