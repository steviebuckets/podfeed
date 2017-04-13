import React from 'react';

//change this to export function and not default and make changes to index.js > will become import { Register } from ..
export default function Register(props) {
    // console.log(user, 'my user');
    // const { my props inside here, user and password?} = props;

    $('.register-button').click(function(event) {
        event.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();
        $.ajax({
            url: '/register',
            method: 'POST',
            data: {
                email: email,
                password: password
            }
        }).done(function(response) {
            localStorage.setItem('token', response.token);
            location.reload();

        }).fail(function(response) {
            $('.alert').removeClass('hidden');
            console.log(response);

        });

    });

    return (
        <div className="register-container">
            <p>Welcome to Pod-Feed. Please sign up if you don't already have a Pod-Feed Account.</p>
            <div className="form-container">
                <label>Email<span>*</span>
                </label>
                <input type="email" id="email" name="email"></input><br/><br/>

                <label>Password<span>*</span>
                </label>
                <input type="password" id="password" name="password"></input>

                <input type="submit" name="login-button" id="login" value="Sign in" onClick={onSubmit}></input>
            </div>
        </div>
    )
}

//bottom half of onSubmit from PodcastList search
//
//     return (
//         <div className='podcast-list'>
//             <input type='text' className='podcast__name' placeholder='Search Podcast' onKeyDown={onSubmit}/>
//             <ul className='podcast__list'>
//                 {audio.map(podcast => (
//                     <li key={podcast.url} className='podcast__item'>
//                         <Podcast podcast={podcast}/>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
