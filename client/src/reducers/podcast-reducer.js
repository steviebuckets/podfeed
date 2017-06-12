let init = [];
// let state = {};
import {FETCH_DESCRIPTION_SUCCESS, FETCH_USER_SUBSCRIPTION_SUCCESS, FETCH_STILL_LOADING, SUBSCRIBED_SUCCESS} from '../actions';

export default function podcastReducer(podcasts = init, action) {
  // console.log('what does action', podcasts);
  console.log(action, 'action');

  switch (action.type) {
      // console.log(action, 'url');
    case 'ADD_PODCAST':
      return [
        action.payload.data.data, ...podcasts
      ]
    case FETCH_DESCRIPTION_SUCCESS:
      return [
        ...podcasts,
        ...action.payload.data.data
      ]; // double spread operators do the trickz
    case FETCH_USER_SUBSCRIPTION_SUCCESS:
      console.log(action, "my subscriptions actions")
      return [...action.payload.data];
    case SUBSCRIBED_SUCCESS:
      return action.payload.data
    case FETCH_STILL_LOADING:
      return podcasts // this being empty we can get that lovely "spinner action"
    default:
      return podcasts;
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
