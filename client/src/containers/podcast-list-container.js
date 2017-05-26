import {connect} from 'react-redux';
import {addPodcast, newSubscription, userSubscriptions} from '../actions';
import * as components from '../components/podcast-list';

const mapStateToProps = (state) => {
  return {audio: state, user: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPodcast: text => dispatch(addPodcast(text)),
    newSubscription: key => dispatch(newSubscription(key)),
    userSubscriptions: user => dispatch(userSubscriptions(user)),
  }
}

const PodcastList = connect(mapStateToProps, mapDispatchToProps)(components.PodcastList)
export default PodcastList;

//adding newSubscription action to PodcastList Component
