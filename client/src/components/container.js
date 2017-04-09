import {connect} from 'react-redux';
// import Podcast from './podcast';
import PodcastList from './podcast-list';
// import * as actions from '../actions/index';

import { addPodcast } from '../actions/index';

export const PodcastList = connect(function mapStateToProps(state) {
    return {podcasts: state};
}, function mapDispatchToProps(dispatch) {
    return {
        addPodcast: podcast => dispatch(addPodcast(podcast))
    };
})(PodcastList.PodcastList);


// if (action.type === actions.ADD_PODCAST) {
//     // return Object.assign(state, {name: action.podcast});
//     return Object.assign(state, {name: action.podcast})
// }
//
//   this.props.dispatch(actions.addPodcast(podcastName));
