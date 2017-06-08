import {connect} from 'react-redux';
import {verifyUser} from '../actions';
import {bindActionCreators} from 'redux';
import * as components from '../components/register';

const mapStateToProps = (state) => {
    // console.log('working?', state);
    return {user: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
      verifyUser
    }, dispatch)
    // return {
    //     verifyUser: emailPasswordObject => dispatch(verifyUser(emailPasswordObject))
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(components.Register)
