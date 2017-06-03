import axios from 'axios';
// import Auth from './modules/Auth';

// Register User
export const verifyUser = user => dispatch => {
  // console.log('my user', user)
  axios.post('/register', {
    email: user.email,
    password: user.password
  }).then(function(response) {

    let myToken = response.data.token;
    localStorage.setItem('token', myToken);
    location.replace('/');

  }).catch(function(error) {
    console.log('User already exists', error);
  })
}

// Sign In User
export const identifyUser = user => dispatch => {

  axios.post('/login', {
    email: user.email,
    password: user.password
  }).then(function(response) {

    let myToken = response.data.token;
    localStorage.setItem('token', myToken);
    location.replace('/');

  }).catch(function(error) {
    console.log('User not found', error);
  })
}

// Returns Podcast Data From API
export const fetchDescriptionSuccess = (podcast, description) => ({type: 'FETCH_DESCRIPTION_SUCCESS', podcast, description});

export const fetchUserSubscriptionSuccess = (data) => ({type: 'FETCH_USER_SUBSCRIPTION_SUCCESS', data});


// Search For Podcast
export const addPodcast = podcast => dispatch => {
  console.log("inside addPodcast", podcast)
  const url = `/search?q=${encodeURI(podcast)}&token=${localStorage.getItem('token')}` // backend request.query['q'] ?key=value&key2=value2
  console.log('url', url);
  return axios.get(url).then(function(data) {
    console.log(data, 'data');
    dispatch(fetchDescriptionSuccess(podcast, data))
  }).catch(function(error) {
    console.log(error)
  })
}

// New Podcast Subscription
export const newSubscription = podcastKeyImage => dispatch => {
  console.log("my image", podcastKeyImage)
  let myToken = localStorage.getItem('token');
  const podcastKey = podcastKeyImage.split(",")[0]
  const image = podcastKeyImage.split(",")[1]

  axios.post('/subscribe?token=' + myToken, {
    key: podcastKey,
    image: image
    // usernName: userName,
    // image: image
  }).then(function(response) {
    //?? feeedback generation
    console.log('you have subscribed!', response.data);
  }).catch(function(error) {
    console.log('oops, you did not subscribe', error)
  })
}

//Retrieve User Podcasts
export const userSubscriptions = podcasts => dispatch => {
  // is it a string? number?
  let myToken = localStorage.getItem('token');
  axios.get('/subscriptions?token=' + myToken, {user: podcasts}).then(function(response) {
    dispatch(fetchUserSubscriptionSuccess(response.data))
  // dispatch? something that changed thedstate?
  }).catch(function(error) {
    console.log("Sorry, no podcasts here", error)
  })
}
