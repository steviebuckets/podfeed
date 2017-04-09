import * as actions from '../actions/index';

const initialPodcastsState = {
    name: '',
    data: []
}; // name to temporarily hold what the user is searching for!!

export const podcastsReducer = (state = initialPodcastsState, action) => {
    if (action.type === actions.ADD_PODCAST) {
        // return Object.assign(state, {name: action.podcast});
        return Object.assign(state, {name: action.podcast})
    } else if (action.type === actions.FETCH_DESCRIPTION_SUCCESS) {
        console.log('we are here now... it was successful', action, 'my state', state);
        return Object.assign(state, {data: action.description.data});
    } else if (action.type === actions.FETCH_DESCRIPTION_ERROR) {
        console.log('Could not find podcast');
    }
    return state;

}
