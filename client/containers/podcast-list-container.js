import { connect } from 'react-redux';
// import { PodcastList } from './components/podcast-list';
import * as PodcastList from '/components/podcast-list'
// import * as components from './components';
import { addPodcast } from './actions';

export const PodcastList = connect(
  function mapStateToProps(state) {
    return { audio: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addPodcast: text => dispatch(addPodcast(text)),
    };
  }
)(components.PodcastList);
