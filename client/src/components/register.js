import React from 'react';
import {Link} from 'react-router';

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
    <div className='container-signin'>
      <form action="/" onSubmit={handleSubmit} className="form">
        <i className="fa fa-headphones fa-4x" aria-hidden="true"></i>
        <h1>Pod Feed</h1>
        <p>Welcome to Pod Feed. Please sign up if you don't already have a Pod Feed Account.</p>

        <div className='field'>
          <input name='email' placeholder="Email" className="email" type="text" value={props.email} onChange={e => email = e.target.value}/>
        </div>

        <div className='field'>
          <input name='password' placeholder="Password" className="password" type="password" value={props.password} onChange={e => password = e.target.value}/>
        </div>

        <div>
          <button type='submit' className="btn-signin" label='Log in'>Register</button>
        </div>

        <Link to="/signin">
          <p className="secondary">Already have an account?</p>
        </Link>

      </form>
    </div>

  );
}
