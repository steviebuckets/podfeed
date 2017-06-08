import React from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';

export class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.email = "";
    this.password = "";
    this.handleSubmit = this.handleSubmit.bind(this);
  }

componentDidMount() {
  console.log(this.props, "inside")
}
  handleSubmit(event) {
    console.log(this.props, 'inside signin')

    event.preventDefault();
    // console.log('my identifyUser', this)
    this.props.identifyUser({email: this.email, password: this.password});
    browserHistory.push('/podcast-list');

  }

  render() {
    return (
      <div className='container-signin'>
        <form action="/" onSubmit={this.handleSubmit} className="form">
          <i className="fa fa-headphones fa-4x" aria-hidden="true"></i>
          <h1>Pod Feed</h1>
          <p>Welcome to Pod Feed. Please sign in with your Pod Feed Account to continue.</p>

          <div className='field'>
            <input name='email' placeholder="Email" className="email" type="text" value={this.props.email} onChange={e => this.email = e.target.value}/>
          </div>

          <div className='field'>
            <input name='password' placeholder="Password" className="password" type="password" value={this.props.password} onChange={e => this.password = e.target.value}/>
          </div>

          <div>
            <button type='submit' className="btn-signin" label='Log in'>Sign In</button>
          </div>

          <Link to="/register">
            <p className="secondary">Don't have an account?</p>
          </Link>
        </form>
      </div>

    );
  }
}
