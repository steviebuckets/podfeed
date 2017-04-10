// // import * as actions from '../actions/index';
//
// // const initialPodcastsState = {
// //     name: '',
// //     data: []
// // }; // name to temporarily hold what the user is searching for!!
//
// // const init = List([]);
// const Feeds = {name: 'podcast'};
// const init = Feeds;
//
// export default function reducer(todos=init, action) {
//   switch(action.type) {
//     case 'ADD_PODCAST':
//       return todos.push(Map(action.payload));
//     case 'TOGGLE_TODO':
//       return todos.map(t => {
//         if(t.get('id') === action.payload) {
//           return t.update('isDone', isDone => !isDone);
//         } else {
//           return t;
//         }
//       });
//     default:
//       return todos;
//   }
// }
