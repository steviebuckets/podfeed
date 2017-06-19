import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {addPodcast} from '../actions';
import {userSubscriptions} from '../actions';
import { browserHistory } from 'react-router';

import Auth from '../modules/Auth';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const name = this.refs.search.value;
    const isLongEnough = name.length > 0;
    if (isLongEnough) {
      this.refs.search.value = '';
      this.props.addPodcast(name);
      // store the name in localStorage
      localStorage.setItem('name', name);
      browserHistory.push('/podcast-list')
      // location.reload()
      // console.log(this.props, 'from search')
    }
  };

  render() {
    return (
      <div className='container-1'>
        <div className='navbar'>

          <div className="logo">
            <Link to="/">
              <i className="fa fa-headphones fa-2x" aria-hidden="true"></i>
            </Link>
          </div>
          <p>Pod Feed</p>
          {Auth.isUserAuthenticated()
            ? (
              <div>
                <Link to="/logout">
                  <button type="button" className="btn" to="/signinout">Sign Out</button>
                </Link>
                <form onSubmit={this.onSubmit}><input type="text" className="form-control" ref="search" placeholder="Search"/></form>
              </div>
            )
            : (
              <div>
                <Link to="/signin">
                  <button type="button" className="btn signin" to="/signin">Sign In</button>
                </Link>
                <Link to="/register">
                  <button type="button" className="btn-outline" to="/register">Register</button>
                </Link>
              </div>

            )
}

        </div>
        {this.props.children}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {audio: state, user: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addPodcast: text => dispatch(addPodcast(text)),
    userSubscriptions: user => dispatch(userSubscriptions(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
