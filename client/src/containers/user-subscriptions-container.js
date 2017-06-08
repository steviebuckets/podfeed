import {connect} from 'react-redux';
import {userSubscriptions, unSubscribe} from '../actions';
import * as components from '../components/subscriptions';


const mapStateToProps = (state) => {
  return {audio: state}
}


const Subscriptions = connect(mapStateToProps, {userSubscriptions, unSubscribe})(components.Subscriptions)
export default Subscriptions
