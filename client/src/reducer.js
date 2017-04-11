import { List, Map } from 'immutable';

const init = List([]);

// const initialPodcastsState = {
//    name: '',
//     data: []
//  };

export default function reducer(podcasts=init, action) { /// <<<<--- state, what it looks like
  console.log(action, 'action');
  switch(action.type) {
    case 'ADD_PODCAST':
      return podcasts.push(Map(action.payload));
    case 'FETCH_DESCRIPTION_SUCCESS':
      const { data } = action.data;
      console.log(data); // the data looks messy... too embedded :-D
      return data.data;
      // return action.data.data.data;
    case 'TOGGLE_TODO':
      return podcasts.map(t => {
        if(t.get('id') === action.payload) {
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });
    default:
      return podcasts;
  }
}
