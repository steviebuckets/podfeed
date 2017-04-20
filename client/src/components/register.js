import React from 'react';
// import { Link } from 'react-router';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    // this.state= {value: ''};

    this.state = {
      email: '',
      password: ''
  };



  // const podcastsSchema = new mongoose.Schema({
  //   "username": {type: String, required: true},
  //   "name": {type: String, required: true},
  //   "image": { type: String, required: true },
  //   "image_id": { type: String }
  // });
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    // this.setState({
    //   email: event.target.value,
    //   password: event.target.value
    // });
  }
  handleSubmit(event) {
    console.log('A email was submitted:' + this.state.email);
    console.log('A password was submitted:' + this.state.password);
    event.preventDefault();
  }
  render() {
    return (
      <Card className='container'>
          <form action='/podcast-list' onSubmit={this.handleSubmit} >
              <h2 className='card-heading'>Register</h2>

              <div className='field-name'>
                  <TextField floatingLabelText='Email' name="email" type="text" value={this.state.email} onChange={this.handleInputChange}/>
              </div>

              <div className='field-name'>
                  <TextField floatingLabelText='Password' name="password" type="text" value={this.state.password} onChange={this.handleInputChange}/>
              </div>

              <div className='button-line'>
                  <RaisedButton type='submit' value="Submit" label='Create New Account' primary/>
              </div>

              <CardText>Already have an account?</CardText>

          </form>
      </Card>


    )
  }
}

// export function Register(props) {
//   console.log(props);
//     const { email, password } = props;
//
//     //process form
//     const handleSubmit = (event) => {
//       console.log(email);
//       console.log(password);
//       //call my action to verifyUser here verifyUser(email, pass) etc
//     };
//
//     // //process from this way?
//     // processForm(event) {
//     //     event.preventDefault();
//     //     console.log('email:' this.state.user.email);
//     //     console.log('password:' this.state.user.password);
//     // }
//
//     ////refs form input values
//     //event targets
//     //redux-form
//
//     return (
//
//         <Card className='container'>
//             <form action='/podcast-list' onSubmit={handleSubmit} >
//                 <h2 className='card-heading'>Register</h2>
//
//                 <div className='field-name'>
//                     <TextField floatingLabelText='Email' name='email' value='email'/>
//                 </div>
//
//                 <div className='field-line'>
//                     <TextField floatingLabelText='Password' type='password' name='password' value='password'/>
//                 </div>
//
//
//                 <div className='button-line'>
//                     <RaisedButton type='submit' label='Create New Account' primary/>
//                 </div>
//
//                 <CardText>Already have an account?</CardText>
//
//             </form>
//         </Card>
//     );
// }
