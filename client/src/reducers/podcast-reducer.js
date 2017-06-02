let init = [];

// create object for user
// another for podcasts
// create another red
export default function podcastReducer(podcasts = init, action) {
  // console.log('what does action', action)
  switch (action.type) {
    case 'ADD_PODCAST':
      return podcasts.push(action.payload);
    case 'FETCH_DESCRIPTION_SUCCESS':
      // console.log('what?', action.podcast,action.description.data);
      // podcasts = action.description.data.data;
      let y = [...action.description.data.data];

      console.log(y, y.length, 'y');
      // return podcasts.push(action.description.data.data);
      return y
    case 'FETCH_USER_SUBSCRIPTION_SUCCESS':
      return action.data;
    default:
      return podcasts;
  }
}

/*
concat
...spread
assign (objects)
*/
