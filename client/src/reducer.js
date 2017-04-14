import {List, Map} from 'immutable';

const init = [];

export default function reducer(podcasts = init, action) { 
    console.log('what does action', action)
    switch (action.type) {
        case 'ADD_PODCAST':
            return podcasts.push(action.payload);
        case 'FETCH_DESCRIPTION_SUCCESS':
            // action
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
