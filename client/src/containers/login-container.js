import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {identifyUser} from '../actions';
import * as components from '../components/signin';
const mapStateToProps = (state) => {
  // console.log('working?', state);
  return {user: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log("is this working?")

  return bindActionCreators({
    identifyUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(components.SignIn)
