let init = [];
import {FETCH_DESCRIPTION_SUCCESS, LOGIN_SUCCESS} from '../actions';
// create object for user
// another for podcasts
// create another red
export default function podcastReducer(podcasts = init, action) {
  console.log('what does action', action.type);
  switch (action.type) {
    case 'ADD_PODCAST':
      console.log(action, 'add');
      return [action.payload, ...podcasts]
    case FETCH_DESCRIPTION_SUCCESS:
      // console.log('what?', action.podcast,action.description.data);
      // podcasts = action.description.data.data;
      // return  [action.payload.data.data, ...podcasts];
      return action.payload.data.data;
    // case 'FETCH_USER_SUBSCRIPTION_SUCCESS':
    
    default:
      return podcasts;
  }
}
