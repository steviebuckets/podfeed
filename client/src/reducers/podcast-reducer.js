let init = [];
// let state = {};
import {FETCH_DESCRIPTION_SUCCESS, FETCH_USER_SUBSCRIPTION_SUCCESS, FETCH_STILL_LOADING, SUBSCRIBED_SUCCESS} from '../actions';

export default function podcastReducer(podcasts = init, action) {
  // console.log('what does action', podcasts);
  console.log(action, 'action');
  switch (action.type) {
      // console.log(action, 'url');
    //Performs a Podcast Search
    case 'ADD_PODCAST':
      return [
        action.payload.data.data, ...podcasts
      ]
    //Returns Podcast Data from Search
    case FETCH_DESCRIPTION_SUCCESS:
      return [

        ...action.payload.data.data
      ];
    //This Returns User Podcast Subscriptions
    case FETCH_USER_SUBSCRIPTION_SUCCESS:
      console.log(action, "my subscriptions actions")
      return [...action.payload.data];
    //New Podcast Subscriptions
    case SUBSCRIBED_SUCCESS:
      return action.payload.data
    //Loading Page
    case FETCH_STILL_LOADING:
      return podcasts // this being empty we can get that lovely "spinner action"
    default:
      return podcasts;
  }

}
