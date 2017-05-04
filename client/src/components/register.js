import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export function Register(props) {
    let email = "";
    let password = "";

    const {verifyUser} = props;

    const handleSubmit = (event) => {

        event.preventDefault();

        verifyUser({email, password});

        console.log(localStorage);

    }

    return (
        <Card className='container'>
            <form action="/" onSubmit={handleSubmit}>
                <h2 className='card-heading'>Register</h2>

                <div className='field-name'>
                    <TextField floatingLabelText='Email' name='email' type="text" value={props.email} onChange={e => email = e.target.value}/>
                </div>

                <div className='field-name'>
                    <TextField floatingLabelText='Password' name='password' type="text" value={props.password} onChange={e => password = e.target.value}/>
                </div>

                <div className='button-line'>
                    <RaisedButton type='submit' label='Create New Account' primary/>
                </div>

                <CardText>Already have an account?</CardText>

            </form>
        </Card>

    );
}
