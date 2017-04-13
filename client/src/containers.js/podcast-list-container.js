import { connect } from 'react-redux';
import { addPodcast } from './actions';
import { PodcastList } from './components/podcast-list';


export const PodcastListContainer = connect(
  function mapStateToProps(state) {
    return { audio: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addPodcast: text => dispatch(addPodcast(text)),
    };
  }
)(components.PodcastList);


// import { connect } from 'react-redux';
// import * as components from './components';
// import { addPodcast } from './actions';
//
// export const PodcastList = connect(
//   function mapStateToProps(state) {
//     return { audio: state };
//   },
//   function mapDispatchToProps(dispatch) {
//     return {
//       addPodcast: text => dispatch(addPodcast(text)),
//     };
//   }
// )(components.PodcastList);
