import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export function SignIn(props) {

    let email = "";
    let password = "";

    const {identifyUser} = props;

    const handleSubmit = (event) => {

        event.preventDefault();

        identifyUser({email, password});

        console.log(localStorage);
    }

    return (
        <Card className='container'>
            <form action="/" onSubmit={handleSubmit}>
                <h2 className='card-heading'>Sign in</h2>

                <div className='field-name'>
                    <TextField floatingLabelText='Email' name='email' type="text" value={props.email} onChange={e => email = e.target.value}/>
                </div>

                <div className='field-name'>
                    <TextField floatingLabelText='Password' name='password' type="text" value={props.password} onChange={e => password = e.target.value}/>
                </div>

                <div className='button-line'>
                    <RaisedButton type='submit' label='Log in' primary/>
                </div>

                <CardText>Don't have an account?</CardText>

            </form>
        </Card>

    );
}
