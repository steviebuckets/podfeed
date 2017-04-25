import axios from 'axios';

export const fetchDescriptionSuccess = (podcast, description) => ({type: 'FETCH_DESCRIPTION_SUCCESS', podcast, description});

export const addPodcast = podcast => dispatch => {
    const url = `/search?q=${encodeURI(podcast)}` // backend request.query['q']
    console.log(url, 'url');
    return axios.get(url).then(function(data) {
        console.log('my data', data)
        dispatch(fetchDescriptionSuccess(podcast, data))
    }).catch(function(error) {
        console.log(error)
    })
}

// verify user action { email: 'blah', password: 'meh'}
export const verifyUser = user => dispatch => {
    console.log('my user action in actions', user)
    axios.post('/register', {
        email: user.email,
        password: user.password
    }).then(function(response) {
        console.log('my user is working!', response)
    }).catch(function(error) {
        console.log('User already exists', error);
    })
}

// recursive function
// function factorial(n){
//   if (n == 0){
//     return 1;
//   } else {
//     return n * factorial(n-1);
//   }
// }
//
//
// 3 - 1000?
// x y z
// x z y
// z x y
// z y x
// y z x
// y x z
//
// 3 people, 3 x 2 x 1  x 1 => 6???
// 4 people? 4 X 3 X 2 X 1 =>
// Pascal - Pascal's
