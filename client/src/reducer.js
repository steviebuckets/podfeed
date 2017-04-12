import {List, Map} from 'immutable';

// const init = List([]);
const init = [];

// const initialPodcastsState = {
//    name: '',
//     data: []
//  };

export default function reducer(podcasts = init, action) { /// <<<<--- state, what it looks like
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
    } /// we are retungin tsatet
}
