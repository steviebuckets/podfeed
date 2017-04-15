import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export function Register(props) {
const {onSubmit, onChange, user} = props;

return (

  <Card className='container'>
    <form action='/' onSubmit={onSubmit}>
      <h2 className='card-heading'>Register</h2>

      <div className='field-name'>
        <TextField
          floatingLabelText='Email'
          email='email'
          onChange={onChange}
          value={user}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Password'
          password='password'
          onChange={onChange}
          value={user}
        />
      </div>

      <div className='button-line'>
        <RaisedButton type='submit' label='Create New Account' primary />
      </div>

      <CardText>Already have an account?</CardText>

      </form>
    </Card>
  );
}
