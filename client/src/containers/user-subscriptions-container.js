import {connect} from 'react-redux';
import {userSubscriptions, unSubscribe, newSubscription} from '../actions';
import * as components from '../components/subscriptions';
// import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
  return {audio: state}
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({newSubscription}, dispatch)
//
// }


const Subscriptions = connect(mapStateToProps, {userSubscriptions, unSubscribe, newSubscription})(components.Subscriptions)
export default Subscriptions
