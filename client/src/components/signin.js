import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export function SignIn(props) {
const {onSubmit, onChange, errors, user} = props;

return (

  <Card className='container'>
    <form action='/' onSubmit={onSubmit}>
      <h2 className='card-heading'>Sign In</h2>

      <div className='field-name'>
        <TextField
          floatingLabelText='Name'
          name='name'
          onChange={onChange}
          value={user}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Email'
          name='email'
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
