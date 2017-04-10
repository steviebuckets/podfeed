// const uid = () => Math.random().toString(34).slice(2);
import axios from 'axios';

export const fetchDescriptionSuccess = (podcast, description) => ({type: 'FETCH_DESCRIPTION_SUCCESS', podcast, description});

export const addPodcast = podcast => dispatch => {
  const url = `/search?q=${encodeURI(podcast)}`  // backend request.query['q']
  return axios.get(url)
    .then(function (data) {
      console.log('my data', data)})
      .catch(function (error) {
        console.log(error)
      })
  // return fetch(url).then(response => {
  //         if (!response.ok) {
  //             const error = new Error(response.statusText)
  //             error.response = response
  //             throw error;
  //         }
  //         console.log(response, 'what!!');
  //
  //     }).then(response => {
  //       console.log('something should happen', response.body);
  //       // return response.json()
  //       return {};
  //     }).then(data => {
  //       console.log('steve data', data)
  //       dispatch(fetchDescriptionSuccess(podcast, data))
  //       // return {
  //       //   type: 'ADD_PODCAST',
  //       //   payload: {
  //       //     name: podcast
  //       //   }
  //       // };
  //
  //     }).catch(error => {
  //       console.log('caught', error);
  //       // dispatch(fetchDescriptionError(podcast, error))
  //     });
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
}


// export const FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
