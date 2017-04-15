import React from 'react';
import {Link} from 'react-router';
import { Card, CardText } from 'material-ui/Card';

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
      <CardText><Link to={'/signin'}>Sign in</Link></CardText>
      <CardText><Link to={'/register'}>Register</Link></CardText>
      {props.children}
      </Card>

  )
}

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
