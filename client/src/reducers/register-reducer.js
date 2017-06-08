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

  // export default function userReducer(state = {}, action) {
  //   switch (action.type) {
  //     case LOGIN_SUCCESS:
  //       console.log('action', action);
  //       let token = action.payload.data.token;
  //       localStorage.setItem('token', token);
  //       return Object.assign({}, state, {
  //         token: token
  //       })
  //       default:
  //         return state;
  //   }
  //
  //   }


  // Register User Action
  // export const verifyUser = user => dispatch => {
  //   // console.log('my user', user)
  //   axios.post('/register', {
  //     email: user.email,
  //     password: user.password
  //   }).then(function(response) {
  //
  //     let myToken = response.data.token;
  //     localStorage.setItem('token', myToken);
  //     location.replace('/');
  //
  //   }).catch(function(error) {
  //     console.log('User already exists', error);
  //   })
  // }
  //
