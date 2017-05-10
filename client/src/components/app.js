import React from 'react';
import {Link} from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';

// export const App = (props) => {
//     return (
//         <div className="navbar">
//             <div className="logo">
//                 <h3>Pod-Feed</h3>
//
//                 <Link className='btn btn-success' to='/signin'>
//                     Sign In
//                 </Link>
//
//                 <Link className='btn btn-primary' to='/register'>
//                     Register
//                 </Link>
//                 <div>
//                     {props.children}
//                 </div>
//             </div>
//         </div>
//     )
// }

<a href="/users/sign_up" class="btn btn-success sign_up_button">Register</a>

export const App = (props) => {
  return(
      <div className='container'>
      <div className='navbar'>
      <div className="logo">
        <i className="fa fa-headphones fa-2x" aria-hidden="true"></i>
      </div>
        <p>Pod-Feed</p>
        {
          Auth.isUserAuthenticated() ?
          (<Link to="/logout"><button type="button" className="btn" to="/signinout">Sign Out</button></Link>):


          (
            <div><Link to="/signin"><button type="button" className="btn" class="signin" to="/signin">Sign In</button></Link>
            <Link to="/register"><button type="button" className="btn-outline" to="/register">Register</button></Link>
            </div>

          )
        }
        </div>
      {props.children}

      </div>
)}
