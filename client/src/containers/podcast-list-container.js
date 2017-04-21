import { connect } from 'react-redux';
import { addPodcast } from '../actions';
import * as components from '../components/podcast-list';

const mapStateToProps = (state) => {
  return { audio: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPodcast: text => dispatch(addPodcast(text)),
  }
}

const PodcastList = connect(
  mapStateToProps,
  mapDispatchToProps
)(components.PodcastList)
export default PodcastList
