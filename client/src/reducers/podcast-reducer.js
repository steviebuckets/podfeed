let init = [];
import {FETCH_DESCRIPTION_SUCCESS, LOGIN_SUCCESS, FETCH_STILL_LOADING} from '../actions';
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
      return  [...podcasts, ...action.payload.data.data]; // double spread operators do the trick
<<<<<<< HEAD
      // return action.payload.data.data;
=======
      // return action.payload.data.data;          
>>>>>>> 2b51ebb334c49ed58abfb231e5ef5c3c05f3feaa
    case FETCH_STILL_LOADING:
      return podcasts    // this being empty we can get that lovely "spinner action"
    default:
      return podcasts;
  }
}
