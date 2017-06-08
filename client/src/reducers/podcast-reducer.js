let init = [];
let state = {};
import {FETCH_DESCRIPTION_SUCCESS, REGISTER_USER_SUCCESS, FETCH_STILL_LOADING} from '../actions';
// create object for user
// another for podcasts
// create another red
export default function podcastReducer(podcasts = init, action) {
  console.log('what does action', podcasts);
  switch (action.type) {
    case 'ADD_PODCAST':
      console.log(action, 'add');
      return [action.payload, ...podcasts]
    case FETCH_DESCRIPTION_SUCCESS:
      return  [...podcasts, ...action.payload.data.data]; // double spread operators do the trick


      // return action.payload.data.data;
      // case REGISTER_USER_SUCCESS:
      // state={};
      // return [action.payload]
      // let token = action.payload.data.token;
      // localStorage.setItem('token', token);
      //   return Object.assign({}, state, {
      //     token: token
      //   })
        // return [action.payload]
    case FETCH_STILL_LOADING:
      return podcasts    // this being empty we can get that lovely "spinner action"
    default:
      return podcasts;
  }
}

// import {REGISTER_USER_SUCCESS} from '../actions';
//
// export default function registerReducer(state = {}, action) {
//   switch (action.type) {
//     case 'REGISTER_USER_SUCCESS':
//       console.log('actoin', action);
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
