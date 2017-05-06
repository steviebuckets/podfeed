import {connect} from 'react-redux';
import {identifyUser} from '../actions';
import * as components from '../components/signin';

const mapStateToProps = (state) => {
    // console.log('working?', state);
    return {user: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log("is this working?")
    return {
        identifyUser: emailPasswordObject => dispatch(identifyUser(emailPasswordObject))
    }
}

const SignIn = connect(mapStateToProps, mapDispatchToProps)(components.SignIn)

export default SignIn
