import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {identifyUser} from '../actions';
import * as components from '../components/signin';
const mapStateToProps = (state) => {
  return {user: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {

  return bindActionCreators({
    identifyUser
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(components.SignIn)
