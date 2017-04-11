// const uid = () => Math.random().toString(34).slice(2);
import axios from 'axios';

export const fetchDescriptionSuccess = (podcast, data) => ({type: 'FETCH_DESCRIPTION_SUCCESS', podcast, data});

export const addPodcast = podcast => dispatch => {
  const url = `/search?q=${encodeURI(podcast)}`  // backend request.query['q']
  return axios.get(url)
    .then(function (data) {
      console.log('my data', data)
      dispatch(fetchDescriptionSuccess(podcast, data))
    })
    .catch(function (error) {
        console.log(error)
        // TODO -> steve fix this
        // dispatch(fetchDescriptionError(podcast, error))
      })  
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
}
