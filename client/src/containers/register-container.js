import {connect} from 'react-redux';
import {verifyUser} from './actions';
import * as components from '../components/register';

const mapStateToProps = (state) => {
  console.log('working?', state);
    return {user: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        verifyUser: text => dispatch(verifyUser(text))
    }
}

const Register = connect(mapStateToProps, mapDispatchToProps)(components.Register)

export default Register

// import {connect} from 'react-redux';
// import * as components from '../components/register';
//
// // const mapStateToProps = (state) => {
// //   return { user: state}
// // }
// //
// // const mapDispatchToProps = (dispatch, ownProps) => {
// //   return {
// //     //action from actions
// //     addPodcast: text => dispatch(addPodcast(text)),
// //   }
// // }
// //
// // const PodcastList = connect(
// //   mapStateToProps,
// //   mapDispatchToProps
// // )(components.PodcastList)
// //
// // export default PodcastList
//
// class RegisterUser extends React.Component {
//     constructor(props) {
//
//         this.state = {
//             errors: {},
//             user: {
//                 email: '',
//                 password: ''
//             }
//         };
//         this.processForm = this.processForm.bind(this);
//         this.changeUser = this.changeUser.bind(this);
//     }
//
//     changeUser(event) {
//         const field = event.target.name;
//         const user = this.state.user;
//         user[field] = event.target.value;
//
//         this.setState({user});
//     }
//
//     processForm(event) {
//         event.preventDefault();
//
//         const email = encodeURIComponent(this.state.user.email);
//         const password = encodeURIComponent(this.state.user.password);
//         const podcasts = encodeURIComponent(this.state.user.podcasts);
//         const formData = `email=${email}&password=${password}&podcasts=${podcasts}`;
//
//         // ajax call to backend or axios.get below
//         const xhr = new XMLHttpRequest();
//         xhr.open('post', '/register');
//         xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//         xhr.responseType = 'json';
//         xhr.addEventListener('load', () => {
//             if (xhr.status === 200) {
//                 //success
//
//                 //change the component-container state
//                 this.setState({errors: {}});
//
//                 console.log('The form is valid');
//             } else {
//                 //failure
//
//                 const errors = xhr.response.errors
//                     ? xhr.response.errors
//                     : {};
//                 errors.summary = xhr.response.message;
//
//                 this.setState({errors});
//             }
//         });
//         xhr.send(formData);
//     }
//
//     /**
//       * Render the component.
//       */
//     render() {
//         return (<Register onSubmit={this.processForm} onChange={this.changeUser} errors={this.state.errors} user={this.state.user}/>);
//     }
// }
//
// export default RegisterUser;
