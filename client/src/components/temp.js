import React from 'react';
// import { Link } from 'react-router';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


export function Register(props) {
    console.log('props', props);
    const {verifyUser} = props; // {audio: 'blah', addPodcast: 'meh'}

    handleInputChange(event) {
      console.log('my props', props);
      const target = event.target;
      const value = target.value;
      const name = target.name;

  }

  handleSubmit(event) {
    console.log('A email was submitted:' + this.state.email);
    console.log('A password was submitted:' + this.state.password);
    event.preventDefault();
  }

    return return (
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


    );
}
