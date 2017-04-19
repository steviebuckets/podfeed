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

// verify user action
export const verifyUser = user => dispatch => {
    console.log('my user action in actions', user)
    axios.post('/register', {
        email: 'user.email',
        password: 'user.password'
    }).then(function(response) {
        console.log('my user', response)
        dispatch(verifyUser(user))
    }).catch(function(error) {
        console.log(error);
    })
}
