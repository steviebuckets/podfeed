import React from 'react';

export default function Register(props) {
    const {user} = props

    const onSubmit = (event) => {
        const input = event.target;
        const email = input.value;
        const password = input.value;

        const isEnterKey = (event.which === 13);
        const isLongEnough = name.length > 0;
        if (isEnterKey && isLongEnough) {
            // console.log("my props", props)
            input.value = '';
            // addPodcast(name);
        }
    };
    return (
        <div className="register-container">
            <p>Welcome to Pod-Feed. Please sign up if you don't already have a Pod-Feed Account.</p>
            <div className="form-container">
            <form>
              <div className='form-group'>
                <label>Email<span>*</span>
                </label>
                  <input className='form-control' type="email" id="email" name="email"></input><br/><br/>
                </div>
                <label>Password<span>*</span>
                </label>
                <input className='form-control' type="text" id="password" name="password"></input><br/>

                <input type="submit" name="login-button" id="login" value="Sign in" onClick={onSubmit}></input>
                </form>
            </div>
        </div>
    )

}
