import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export class SignIn extends React.Component {
   constructor(props) {
     super(props)
    this.email = "";
    this.password = "";
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    // const {identifyUser} = props;


    handleSubmit(event) {

        event.preventDefault();
        console.log('my identifyUser', this)
        this.props.identifyUser({email: this.email, password: this.password});


    }
    // is being run!!
    //componentdidMount
 //  componentDidMount() {
 //    localStorage.setItem('display', "cat");  // placeholder we have arrived!!
 //
 // }
    render() {
    return (
        <Card className='container-signin'>
            <form action="/" onSubmit={this.handleSubmit} className="form">
            <i className="fa fa-headphones fa-4x" aria-hidden="true"></i>
              <h1>Pod Feed</h1>
                <p>Welcome to Pod Feed. Please sign in with your Pod Feed Account to continue.</p>

                <div className='field-name'>
                    <TextField floatingLabelText='Email' name='email' type="text" value={this.props.email} onChange={e => this.email = e.target.value}/>
                </div>

                <div className='field-name'>
                    <TextField floatingLabelText='Password' name='password' type="password" value={this.props.password} onChange={e => this.password = e.target.value}/>
                </div>

                <div className='btn-signin'>
                    <RaisedButton type='submit' label='Log in' primary/>
                </div>

                <CardText>Don't have an account?</CardText>

            </form>
        </Card>

    );
  }
}
