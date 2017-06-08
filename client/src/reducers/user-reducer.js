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





  // let init = [];
  // import {FETCH_DESCRIPTION_SUCCESS, LOGIN_SUCCESS} from '../actions';
  // // create object for user
  // // another for podcasts
  // // create another red
  // export default function podcastReducer(podcasts = init, action) {
  //   // console.log('what does action', action.type);
  //   switch (action.type) {
  //     case 'ADD_PODCAST':
  //       console.log(action, 'add');
  //       return [action.payload, ...podcasts]
  //     case FETCH_DESCRIPTION_SUCCESS:
  //       console.log('what?', action);
  //       // podcasts = action.description.data.data;
  //       // return  [action.payload.data.data, ...podcasts];
  //       return action.payload.data.data;
  //     case 'FETCH_USER_SUBSCRIPTION_SUCCESS':
  //      return [action.payload]
  //     default:
  //       return podcasts;
  //   }
  // }




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
