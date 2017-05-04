import {connect} from 'react-redux';
import {verifyUser} from '../actions';
import * as components from '../components/register';

const mapStateToProps = (state) => {
    // console.log('working?', state);
    return {user: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        verifyUser: emailPasswordObject => dispatch(verifyUser(emailPasswordObject))
    }
}

const Register = connect(mapStateToProps, mapDispatchToProps)(components.Register)

export default Register
