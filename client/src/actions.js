import axios from 'axios';
// import Auth from './modules/Auth';

export const fetchDescriptionSuccess = (podcast, description) => ({type: 'FETCH_DESCRIPTION_SUCCESS', podcast, description});

export const addPodcast = podcast => dispatch => {
  const url = `/search?q=${encodeURI(podcast)}&token=${localStorage.getItem('token')}` // backend request.query['q'] ?key=value&key2=value2

  return axios.get(url).then(function(data) {

    dispatch(fetchDescriptionSuccess(podcast, data))
  }).catch(function(error) {
    console.log(error)
  })
}

// verify user action { email: 'blah', password: 'meh'}
export const verifyUser = user => dispatch => {
  // console.log('my user', user)
  axios.post('/register', {
    email: user.email,
    password: user.password
  }).then(function(response) {
    // console.log('my user is working!', response.data.token)
    /// store the token!!!
    let myToken = response.data.token;
    localStorage.setItem('token', myToken);
    location.replace('/');

  }).catch(function(error) {
    console.log('User already exists', error);
  })
}

//New subscription
export const newSubscription = podcast => dispatch => {
  console.log(localStorage, 'my token')
  // console.log('you reached new subscription action', podcast)
  // how does the server know which user wants to subscribe to podcast?
  let myToken = Storage.token;
  // localStorage.getItem('token', myToken);
  // location.replace('/');

  axios.post('/subscribe?token=' + myToken, {key: podcast.key}).then(function(response) {
    // '/posts?token=' + myToken

    // let myToken = response.data.token;
    // localStorage.getItem('token', myToken);
    console.log('you have subscribed!', response.data.key);

  }).catch(function(error) {
    console.log('oops, you did not subscribe', error)
  })
}

// verifies a user on SignIn
export const identifyUser = user => dispatch => {
  // console.log('my user now', user)
  axios.post('/login', {
    email: user.email,
    password: user.password
  }).then(function(response) {
    // console.log('my user is working!', response.data.token)
    /// store the token!!!

    let myToken = response.data.token;
    localStorage.setItem('token', myToken);
    location.replace('/');

  }).catch(function(error) {
    console.log('User not found', error);
  })
}
