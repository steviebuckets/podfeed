import {connect} from 'react-redux';
import {userSubscriptions} from '../actions';
import * as components from '../components/subscriptions';

const mapStateToProps = (state) => {
  return {audio: state, user: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userSubscriptions: user => dispatch(userSubscriptions(user))
  }
}

const Subscriptions = connect(mapStateToProps, mapDispatchToProps)(components.Subscriptions)
export default Subscriptions
