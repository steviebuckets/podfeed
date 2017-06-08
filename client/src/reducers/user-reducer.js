import {LOGIN_SUCCESS} from '../actions';


export default function userReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
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



// create object for user reducer
// const init = {};
//
// export default function userReducer(user = init, action) {
//     // console.log('My userReducer', action)
//     switch (action.type) {
//         case 'VERIFY_USER': // logging?
//             return action.user;
//         default:
//             return user;
//     }
// }

// export default function userReducer(user = init, action) {
//     // console.log('My userReducer', action)
//     switch (action.type) {
//         case 'VERIFY_USER':
//             return action.user;
//
//             case 'IDENTIFY_USER':
//             return action.user;
//
//             default:
//               return user;
//     }
// }
