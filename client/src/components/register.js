import React from 'react';

export function Register(props) {
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

}

return (
    <div className="register-container">
        <p>Welcome to Pod-Feed. Please sign up if you don't already have a Pod-Feed Account.</p>
        <div className="form-container">
            <label>Email<span>*</span>
            </label>
            <input type="text" id="email" name="email"></input><br/><br/>

            <label>Password<span>*</span>
            </label>
            <input type="text" id="password" name="password"></input>

            <input type="text" name="login-button" id="login" value="Sign in" onClick={onSubmit}></input>
        </div>
    </div>
)
}
