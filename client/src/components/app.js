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

export const App = (props) => {
  return(
      <Card className='container-links'>


        {
          Auth.isUserAuthenticated() ?
          (<CardText><Link to="/logout">Sign out</Link></CardText>):
          (
            <div><CardText><Link to="/signin">sigin</Link></CardText>
            <CardText><Link to="/register">register</Link></CardText></div>
          )
        }
      {props.children}

      </Card>
)}

// <Link to={'/signin'}</Link>
//
// // Link={'/signin'}
//
// // <Link to={'/signin'}</Link>
// //
// //
// // // <div className="button-line">
// // //         <RaisedButton type="submit" label="Log in" primary />
// // //       </div>
// // //
// // //       <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
