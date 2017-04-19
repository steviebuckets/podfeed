import React from 'react';
// import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


export function Register(props) {
const { user, onChange, onSubmit } = props;
// const onSubmit = (event) => {
//     const input = event.target;
//     const email = input.value;
//     const password = input.value;
//     const isEnterKey = (event.which === 13);
//     // const isLongEnough = name.length > 0;
//     if (isEnterKey) {
//         // console.log("my props", props)
//         input.value = '';
//         verifyUser(email, password);
//         // fetchDescriptionSuccess(podcastName);
//     }
// };
return (

  <Card className='container'>
    <form action='/podcast-list' onSubmit={onSubmit}>
      <h2 className='card-heading'>Register</h2>

      <div className='field-name'>
        <TextField
          floatingLabelText='Email'
          name='email'
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Password'
          type='password'
          name='password'
          onChange={onChange}
          value={user.password}
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
