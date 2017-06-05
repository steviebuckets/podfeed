import {connect} from 'react-redux';
import {userSubscriptions} from '../actions';
import {unSubscribe} from '../actions';
import * as components from '../components/subscriptions';

const mapStateToProps = (state) => {
  return {audio: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userSubscriptions: user => dispatch(userSubscriptions(user)),
    unSubscribe: podcast => dispatch(unSubscribe(podcast))
  }
}

const Subscriptions = connect(mapStateToProps, mapDispatchToProps)(components.Subscriptions)
export default Subscriptions
