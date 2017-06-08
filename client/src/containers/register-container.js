import {connect} from 'react-redux';
import {verifyUser} from '../actions';
import * as components from '../components/register';

const mapStateToProps = (state) => {
    console.log('working?', state);
    return {user: state}
}

export default connect(mapStateToProps, {verifyUser})(components.Register)
