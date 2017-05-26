// import {List, Map} from 'immutable';
// import * as actions from './actions.js';

const init = [];

// create object for user
// another for podcasts
// create another red
export default function podcastReducer(podcasts = init, action) {
    // console.log('what does action', action)
    switch (action.type) {
        case 'ADD_PODCAST':
            return podcasts.push(action.payload);
        case 'FETCH_DESCRIPTION_SUCCESS':
            // action
            // console.log('what?', action.podcast,action.description.data);
            return action.description.data.data;
        case 'TOGGLE_TODO':
            return podcasts.map(t => {
                if (t.get('id') === action.payload) {
                    return t.update('isDone', isDone => !isDone);
                } else {
                    return t;
                }
            });
        default:
            return podcasts;
    }
}
  
