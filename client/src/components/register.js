import React from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';
//
// export class Register extends React.Component {
//   constructor(props) {
//     super(props)
//     this.email = "";
//     this.password = "";
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   // const {verifyUser} = props;
//
//   handleSubmit(event) {
//     // console.log(localStorage);
//     // console.log(props, 'inside register')
//     event.preventDefault();
//     this.props.verifyUser({email: this.email, password: this.password});
//
//   }
//
//   render() {
//   return (
//     <div className='container-signin'>
//       <form action="/" onSubmit={this.handleSubmit} className="form">
//         <i className="fa fa-headphones fa-4x" aria-hidden="true"></i>
//         <h1>Pod Feed</h1>
//         <p>Welcome to Pod Feed. Please sign up if you don't already have a Pod Feed Account.</p>
//
//         <div className='field'>
//           <input name='email' placeholder="Email" className="email" type="text" value={this.props.email} onChange={e => email = e.target.value}/>
//         </div>
//
//         <div className='field'>
//           <input name='password' placeholder="Password" className="password" type="password" value={this.props.password} onChange={e => password = e.target.value}/>
//         </div>
//
//         <div>
//           <button type='submit' className="btn-signin" label='Log in'>Register</button>
//         </div>
//
//         <Link to="/signin">
//           <p className="secondary">Already have an account?</p>
//         </Link>
//
//       </form>
//     </div>
//
//   );
// }
//
// }





export class Register extends React.Component {
  constructor(props) {
    super(props)
    this.email = "";
    this.password = "";
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// componentDidMount() {
//   console.log(this.props, "inside")
// }
  handleSubmit(event) {
    console.log(this.props, 'inside register')

    event.preventDefault();
    // console.log('my identifyUser', this)
    this.props.verifyUser({email: this.email, password: this.password});
    browserHistory.push('/podcast-list');

  }

  render() {
    return (
      <div className='container-signin'>
        <form action="/" onSubmit={this.handleSubmit} className="form">
          <i className="fa fa-headphones fa-4x" aria-hidden="true"></i>
          <h1>Pod Feed</h1>
          <p>Welcome to Pod Feed. Please sign up if you don't already have a Pod Feed Account.</p>

          <div className='field'>
            <input name='email' placeholder="Email" className="email" type="text" value={this.props.email} onChange={e => this.email = e.target.value}/>
          </div>

          <div className='field'>
            <input name='password' placeholder="Password" className="password" type="password" value={this.props.password} onChange={e => this.password = e.target.value}/>
          </div>

          <div>
              <button type='submit' className="btn-signin" label='Log in'>Register</button>
          </div>

          <Link to="/register">
              <p className="secondary">Already have an account?</p>
          </Link>
        </form>
      </div>

    );
  }
}
