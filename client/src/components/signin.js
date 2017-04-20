import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    // this.state= {value: ''};

    this.state = {
      email: '',
      password: ''
  };

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

  }
  handleSubmit(event) {
    console.log('A email was submitted:' + this.state.email);
    console.log('A password was submitted:' + this.state.password);
    event.preventDefault();
    //call action here to verify user?
    //if user show them podcasts, use react-router to show page?
  }
  render() {
    return (
      <Card className='container'>
          <form action='/podcast-list' onSubmit={this.handleSubmit} >
              <h2 className='card-heading'>Sign in</h2>

              <div className='field-name'>
                  <TextField floatingLabelText='Email' name="email" type="text" value={this.state.email} onChange={this.handleInputChange}/>
              </div>

              <div className='field-name'>
                  <TextField floatingLabelText='Password' name="password" type="text" value={this.state.password} onChange={this.handleInputChange}/>
              </div>

              <div className='button-line'>
                  <RaisedButton type='submit' value="Submit" label='Sign in' primary/>
              </div>

              <CardText>Don't have an account?</CardText>

          </form>
      </Card>


    )
  }
}
