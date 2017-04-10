import { connect } from 'react-redux';
import * as components from './components';
import { addPodcast } from './actions';

export const PodcastList = connect(
  function mapStateToProps(state) {
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addPodcast: text => dispatch(addPodcast(text)),
    };
  }
)(components.PodcastList);
