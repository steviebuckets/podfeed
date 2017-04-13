import React from 'react';

export default function SignIn(props) {
    return (
        <div className="login-container">
            <p>Welcome to Pod-Feed. Please sign in with your Pod-Feed Account to continue.</p>
            <div className="form-container">
                <form>
                    <div className='form-group'>
                        <label>Email<span>*</span>
                        </label>

                        <input className='form-control' type="email" id="email" name="email"></input><br/><br/>
                    </div>
                    <label>Password<span>*</span>
                    </label>
                    <input type="password" id="password" name="password"></input>

                    <input type="submit" name="login-button" id="login" value="Sign in"></input>
                </form>
            </div>
        </div>
    )
}
