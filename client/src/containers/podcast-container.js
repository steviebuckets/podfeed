import { connect } from 'react-redux';
import { newSubscription } from '../actions';
import * as components from '../components/podcast';

const mapStateToProps = (state) => {
    // console.log('working?', state);
    return {user: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        newSubscription: podcast => dispatch(newSubscription(podcast)),
    }
}

const Podcast = connect(
  mapStateToProps,
  mapDispatchToProps
)(components.Podcast)
export default Podcast


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPodcast: text => dispatch(addPodcast(text)),
  }
}
