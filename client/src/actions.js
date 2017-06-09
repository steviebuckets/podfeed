import axios from 'axios';
// import Auth from './modules/Auth';

// Register User
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export function verifyUser(user) {

  let request = axios.post('/register', {
    // console.log('my user', user)
    email: user.email,
    password: user.password
  })
  return {type: REGISTER_USER_SUCCESS, payload: request}
  //   .then(function(response) {
  //
  //     let myToken = response.data.token;
  //     localStorage.setItem('token', myToken);
  //     location.replace('/');
  //
  //   }).catch(function(error) {
  //     console.log('User already exists', error);
  //   })
}

// Sign In User
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function identifyUser(user) {

  let request = axios.post('/login', {
    email: user.email,
    password: user.password
  })
  return {type: LOGIN_SUCCESS, payload: request}
  // .then(function(response) {
  //
  //   let myToken = response.data.token;
  //   localStorage.setItem('token', myToken);
  //   location.replace('/');
  //
  // }).catch(function(error) {
  //   console.log('User not found', error);
  // })
}

// Returns Podcast Data From API
export const fetchDescriptionSuccess = (podcastName, podcasts) => ({type: 'FETCH_DESCRIPTION_SUCCESS', podcastName, podcasts});

export const fetchUserSubscriptionSuccess = (data) => ({type: 'FETCH_USER_SUBSCRIPTION_SUCCESS', data});

// Search For Podcast
export const FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
export const FETCH_STILL_LOADING = 'FETCH_STILL_LOADING'
export function addPodcast(podcastName) {
  const token = localStorage.getItem('token');
  if (token) {
    const url = `/search?q=${encodeURI(podcastName)}&token=${token}` // backend request.query['q'] ?key=value&key2=value2
    // console.log(url, 'url');
    const request = axios.get(url);
    return {type: FETCH_DESCRIPTION_SUCCESS, payload: request}
  } else {
    return {type: FETCH_STILL_LOADING, payload: null}
  }

}
// {artist},${title}`

// New Podcast Subscription
// export const
export function newSubscription(podcastKeyImage) {
  // console.log("my image", podcastKeyImage)
  let myToken = localStorage.getItem('token');
  const podcastKey = podcastKeyImage.split(",")[0]
  const image = podcastKeyImage.split(",")[1]
  const url = podcastKeyImage.split(",")[2]
  const artist = podcastKeyImage.split(",")[3]
  const title = podcastKeyImage.split(",")[4]

  let request = axios.post('/subscribe?token=' + myToken, {
    key: podcastKey,
    image: image,
    url: url,
    artist: artist,
    title: title
  });
  return {type: FETCH_DESCRIPTION_SUCCESS, payload: request}

  // .then(function(response) {
  //   //?? feeedback generation
  //   console.log('you have subscribed!', response.data);
  // }).catch(function(error) {
  //   console.log('oops, you did not subscribe', error)
  // })
}

//I want to use an ID now, not a key
// Delete Podcast Subscription
export function unSubscribe(podcastId) {
  // console.log(podcastId, 'my stuff')
  //whats in here? find the key and assign it to target
  let myToken = localStorage.getItem('token');
  // let target = podcast.key;
  // let id = target;
  // podcast._id;

  let request = axios.delete(`/subscriptions/${podcastId}?token=${myToken}`, {
    // subscription: podcast._id
  });
  return {type: FETCH_DESCRIPTION_SUCCESS, payload: request}
}

export const FETCH_USER_SUBSCRIPTION_SUCCESS = "FETCH_USER_SUBSCRIPTION_SUCCESS";
//Retrieve User Podcasts
export function userSubscriptions(podcasts) {
  // console.log(podcasts, 'my stuff')
  let myToken = localStorage.getItem('token');

  // let artist = "";
  // let title = "";
  let request = axios.get('/subscriptions?token=' + myToken, {user: podcasts})
  console.log(request, "hi")
  return {type: FETCH_USER_SUBSCRIPTION_SUCCESS, payload: request}

  //   //Retrieve User Podcasts
  // export const userSubscriptions = podcasts => dispatch => {
  //   let myToken = localStorage.getItem('token');
  //   axios.get('/subscriptions?token=' + myToken, {user: podcasts}).then(function(response) {
  //     dispatch(fetchUserSubscriptionSuccess(response.data))
  //   // dispatch? something that changed thed state?
  //   }).catch(function(error) {
  //     console.log("Sorry, no podcasts here", error)
  //   })
  // }

  // .then(function(response) {
  //   dispatch(fetchUserSubscriptionSuccess(response.data))
  //   console.log(response.data, "my data back from server")
  //   //  artist = artist + "%2F";
  //   //  title = response.title + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
  //   //  console.log(artist, "my artist data")
  // // dispatch? something that changed thedstate?
  // }).catch(function(error) {
  //   console.log("Sorry, no podcasts here", error)
  // })
}
