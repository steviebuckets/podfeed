import axios from 'axios';

export const fetchDescriptionSuccess = (podcast, description) => ({type: 'FETCH_DESCRIPTION_SUCCESS', podcast, description});


export const addPodcast = podcast => dispatch => {
  const url = `/search?q=${encodeURI(podcast)}`  // backend request.query['q']
  return axios.get(url)
    .then(function (data) {
      console.log('my data', data)
       dispatch(fetchDescriptionSuccess(podcast, data))
     })
      .catch(function (error) {
        console.log(error)
      })
}
