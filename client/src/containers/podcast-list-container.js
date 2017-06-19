import {connect} from 'react-redux';
import {addPodcast, newSubscription, userSubscriptions} from '../actions';
import * as components from '../components/podcast-list';

const mapStateToProps = (state) => {
  return {audio: state}
}

const PodcastList = connect(mapStateToProps, {addPodcast, newSubscription, userSubscriptions})(components.PodcastList)
export default PodcastList
