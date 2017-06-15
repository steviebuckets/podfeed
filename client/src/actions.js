import axios from 'axios';
// import Auth from './modules/Auth';

// Register User
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export function verifyUser(user, callback) {

  let request = axios.post('/register', {
    // console.log('my user', user)
    email: user.email,
    password: user.password
  }).then((response) => {
    callback();
    return response;
  });
  return {type: REGISTER_USER_SUCCESS, payload: request}
}

// Sign In User
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function identifyUser(user, cb) {
  let request = axios.post('/login', {
    email: user.email,
    password: user.password
  }).then((response) => {
    cb(); // run callback
    return response;
  })
  return {type: LOGIN_SUCCESS, payload: request}
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
    const url = `/search?q=${encodeURI(podcastName)}&token=${token}`
    const request = axios.get(url);
    return {type: FETCH_DESCRIPTION_SUCCESS, payload: request}
  } else {
    return {type: FETCH_STILL_LOADING, payload: null}
  }
}

// New Podcast subscriptions
export const SUBSCRIBED_SUCCESS = 'SUBSCRIBED_SUCCESS';
export function newSubscription(podcastKeyImage) {
  // console.log("my image", podcastKeyImage)
  let myToken = localStorage.getItem('token');
  const podcastKey = podcastKeyImage.split(",")[0]
  const image = podcastKeyImage.split(",")[1]
  const url = podcastKeyImage.split(",")[2]
  const artist = podcastKeyImage.split(",")[3]
  const title = podcastKeyImage.split(",")[4]
  // console.log([title, artist, url, image, podcastKey].length, "UNIQUE?");

  let request = axios.post('/subscribe?token=' + myToken, {
    key: podcastKey,
    image: image,
    url: url,
    artist: artist,
    title: title
  });
  return {type: SUBSCRIBED_SUCCESS, payload: request}
  // .then(function(response) {
  //   //?? feeedback generation
  //   console.log('you have subscribed!', response.data);
  // }).catch(function(error) {
  //   console.log('oops, you did not subscribe', error)
  // })
}

// Delete Podcast Subscription
export function unSubscribe(podcastId) {
  let myToken = localStorage.getItem('token');
  // let target = podcast.key;
  // let id = target;
  // podcast._id;
  let request = axios.delete(`/subscriptions/${podcastId}?token=${myToken}`, {
    // subscription: podcast._id
  });
  return {type: FETCH_DESCRIPTION_SUCCESS, payload: request}
}


//Retrieve User Podcasts
export const FETCH_USER_SUBSCRIPTION_SUCCESS = "FETCH_USER_SUBSCRIPTION_SUCCESS";
export function userSubscriptions(podcasts) {
  // console.log(podcasts, 'my stuff')
  let myToken = localStorage.getItem('token');

  let request = axios.get('/subscriptions?token=' + myToken, {user: podcasts})
  // console.log(request, "Hello Fom Action FETCH_DESCRIPTION_SUCCESS")
  return {type: FETCH_USER_SUBSCRIPTION_SUCCESS, payload: request}

}
