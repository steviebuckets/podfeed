import {connect} from 'react-redux';
import {userSubscriptions, unSubscribe, newSubscription} from '../actions';
import * as components from '../components/subscriptions';

const mapStateToProps = (state) => {
  return {audio: state}
}

const Subscriptions = connect(mapStateToProps, {userSubscriptions, unSubscribe, newSubscription})(components.Subscriptions)
export default Subscriptions
