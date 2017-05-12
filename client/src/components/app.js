import React from 'react';
import {Link} from 'react-router';
// import { Card, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';



// <a href="/users/sign_up" class="btn btn-success sign_up_button">Register</a>

export const App = (props) => {
  return(
      <div className='container'>
       <div className='navbar'>
      <div className="logo">
        <Link to="/"><i className="fa fa-headphones fa-2x" aria-hidden="true"></i></Link>
      </div>
        <p>Pod Feed</p>
        {
          Auth.isUserAuthenticated() ?
          (<Link to="/logout"><button type="button" className="btn" to="/signinout">Sign Out</button></Link>):


          (
            <div><Link to="/signin"><button type="button" className="btn signin" to="/signin">Sign In</button></Link>
            <Link to="/register"><button type="button" className="btn-outline" to="/register">Register</button></Link>
            </div>

          )
        }
        </div>
      {props.children}

      </div>
)}
