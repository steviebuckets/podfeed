import {connect} from 'react-redux';
import {userSubscriptions, unSubscribe} from '../actions';
import * as components from '../components/subscriptions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return {audio: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators ({userSubscriptions, unSubscribe}, dispatch)
  
}

const Subscriptions = connect(mapStateToProps, mapDispatchToProps)(components.Subscriptions)
export default Subscriptions
