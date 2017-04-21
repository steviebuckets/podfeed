import React from 'react';
// import { Link } from 'react-router';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export function Register(props) {
    console.log('props', props);
    // const {verifyUser} = props; // {audio: 'blah', addPodcast: 'meh'}
    const handleInputChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
    }


    const handleSubmit = (event) => {
      console.log('A email was submitted:' + props.email);
      console.log('A password was submitted:' + props.password);
      event.preventDefault();
    }


    return (
        <Card className='container'>
            <form action='/podcast-list' onSubmit={handleSubmit}>
                <h2 className='card-heading'>Register</h2>

                <div className='field-name'>
                    <TextField floatingLabelText='Email' name='email' type="text" value={props.email} onChange={handleInputChange}/>
                </div>

                <div className='field-name'>
                    <TextField floatingLabelText='Password' name='password' type="text" value={props.password} onChange={handleInputChange}/>
                </div>

                <div className='button-line'>
                    <RaisedButton type='submit' value={handleSubmit} label='Create New Account' primary/>
                </div>

                <CardText>Already have an account?</CardText>

            </form>
        </Card>

    );
}

// export class Register extends React.Component {
//
// // const {verifyUser} = props;
// // const user = state;
//
//   //bring in props here from action, userVerify from actions
//   // const { userVerify } = props;. etc
//   //then use callback at end of handleSubmit
//   //if user verified show me Podcasts
//   //use react-router to show?
//
//   constructor(props) {
//     super(props);
//     console.log('my props!', this.props)
//
//     this.state = {
//       email: '',
//       password: ''
//   };
//
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleInputChange(event) {
//     console.log('this.props', this.props);
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//
//     // saveUser () {
//     // localStorage.setItem('state', [name]: value);
//     // this.setState({[name]: value});
//
//
//
//     this.setState({
//       [name]: value
//     });
//
//     localStorage.setItem('state', JSON.stringify(this.state));
//   }
//   handleSubmit(event) {
//     console.log('A email was submitted:' + this.state.email);
//     console.log('A password was submitted:' + this.state.password);
//     event.preventDefault();
//
//     // verifyUser(user);
//     //call action here to verify user?
//     //if user show them podcasts, use react-router to show page?
//   }
//   render() {
//     return (
//       <Card className='container'>
//           <form action='/podcast-list' onSubmit={this.handleSubmit} >
//               <h2 className='card-heading'>Register</h2>
//
//               <div className='field-name'>
//                   <TextField floatingLabelText='Email' name="email" type="text" value={this.state.email} onChange={this.handleInputChange}/>
//               </div>
//
//               <div className='field-name'>
//                   <TextField floatingLabelText='Password' name="password" type="text" value={this.state.password} onChange={this.handleInputChange}/>
//               </div>
//
//               <div className='button-line'>
//                   <RaisedButton type='submit' value="Submit" label='Create New Account' primary/>
//               </div>
//
//               <CardText>Already have an account?</CardText>
//
//           </form>
//       </Card>
//
//
//     )
//   }
// }
//
// //new register componet as function
// // export function Register(props) {
// //     console.log('props', props);
// //     const {verifyUser} = props;
// //
// //     handleInputChange(event) {
// //       const target = event.target;
// //       const value = target.value;
// //       const name = target.name;
// //     };
// //
// //     handleSubmit(event) {
// //       console.log('A email was submitted:' + this.state.email);
// //       console.log('A password was submitted:' + this.state.password);
// //       event.preventDefault();
// //       // verifyUser(user);
// //       //call action here to verify user?
// //       //if user show them podcasts, use react-router to show page?
// //     };
// //
// //     return (
// //       <Card className='container'>
// //           <form action='/podcast-list' onSubmit={this.handleSubmit} >
// //               <h2 className='card-heading'>Register</h2>
// //
// //               <div className='field-name'>
// //                   <TextField floatingLabelText='Email' name="email" type="text" value={this.state.email} onChange={this.handleInputChange}/>
// //               </div>
// //
// //               <div className='field-name'>
// //                   <TextField floatingLabelText='Password' name="password" type="text" value={this.state.password} onChange={this.handleInputChange}/>
// //               </div>
// //
// //               <div className='button-line'>
// //                   <RaisedButton type='submit' value="Submit" label='Create New Account' primary/>
// //               </div>
// //
// //               <CardText>Already have an account?</CardText>
// //
// //           </form>
// //       </Card>
// //
// //
// //     )
// // }
