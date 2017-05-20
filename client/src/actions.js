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

// verify user action
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

//New subscription
export const newSubscription = podcastKey => dispatch => {


  let myToken = localStorage.getItem('token');

  axios.post('/subscribe?token=' + myToken, {key: podcastKey}).then(function(response) {
    console.log('you have subscribed!', response.data);

  }).catch(function(error) {
    console.log('oops, you did not subscribe', error)
  })
}

// success: function(responseData, status, jqXHR) {
//                console.log(responseData);
//
//                var div_data =
//                    '<div class="col-md-4"><img src="' + responseData.image + '"><br/>' + responseData.title + "<br/> " + responseData.recordstore + "<br/>" + responseData.description + "<br/>" + responseData.user + "<br/>" + responseData.created + "</div>";
//
//                $('.row').append(div_data);
//            },

// verifies a user on SignIn
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
