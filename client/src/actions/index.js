// // import 'isomorphic-fetch';
// //
// // export const ADD_PODCAST = 'ADD_PODCAST'
// // export const addPodcast = podcast => ({type: ADD_PODCAST, podcast});
// //
// // export const FETCH_DESCRIPTION_SUCCESS = 'FETCH_DESCRIPTION_SUCCESS';
// // export const fetchDescriptionSuccess = (podcast, description) => ({type: FETCH_DESCRIPTION_SUCCESS, podcast, description});
// //
// // export const FETCH_DESCRIPTION_ERROR = 'FETCH_DESCRIPTION_ERROR';
// // export const fetchDescriptionError = (podcast, error) => ({type: FETCH_DESCRIPTION_ERROR, podcast, error});
// //
// // export const fetchDescription = podcast => dispatch => {
// //     const url = `https://api.mixcloud.com/search/?q=/${podcast}/&type=cloudcast`;
// //     return fetch(url).then(response => {
// //         if (!response.ok) {
// //             const error = new Error(response.statusText)
// //             error.response = response
// //             throw error;
// //         }
// //         return response;
// //     }).then(response => response.json()).then(data => dispatch(fetchDescriptionSuccess(podcast, data))).catch(error => dispatch(fetchDescriptionError(podcast, error)));
// // };
// //
// // const uid = () => Math.random().toString(34).slice(2);
//
// export const addPodcast = podcast => dispatch => {
//   // const url = `/search?q=${podcast}`  // backend request.query['q']
//   const url = `https://api.mixcloud.com/search/?q=/${podcast}/&type=cloudcast`;
//   return fetch(url, {
//     method: 'GET',
//     mode: 'cors',
//     headers: new Headers({
//       method: 'GET',
//       mode: 'cors',
//       'Content-Type': 'application/json'
//     })
//   }).then(response => {
//           if (!response.ok) {
//               const error = new Error(response.statusText)
//               error.response = response
//               throw error;
//           }
//
//       }).then(response => {
//         console.log('something should happen', response.json());
//         return response.json()
//       }).then(data => {
//         console.log('steve data', data)
//         // dispatch(fetchDescriptionSuccess(podcast, data))
//         // return {
//         //   type: 'ADD_PODCAST',
//         //   payload: {
//         //     id: uid(),
//         //     isDone: false,
//         //     name: podcast
//         //   }
//         // };
//
//       }).catch(error => {
//         console.log('caught')
//         // dispatch(fetchDescriptionError(podcast, error))
//       });
// }
//
// export function toggleTodo(id) {
//   return {
//     type: 'TOGGLE_TODO',
//     payload: id
//   };
// }
