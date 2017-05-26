import React from 'react';
import {connect} from 'react-redux';
import {userSubscriptions} from '../actions';

const Masonry = require('react-masonry-component');
import {Link} from 'react-router';
// const {mySubscriptions} = props;

const masonryOptions = {};

const style = {};

class Subscriptions extends React.Component {
  constructor(props) {
  super(props)
  this.someFunction = this.someFunction.bind(this);

  }

componentDidMount() {
  console.log("my subscription", this.props)
}


  // componentDidMount() {
  //   console.log(this.props.user.podcastReducer, "my user subscription props")
  //   // // const user = this.props.user;
  //   // this.props.userSubscriptions("steviebuckets33@gmail.com");
  //   // //this will be my call to my subscriptions action to bring back subscribed podcasts
  //   this.props.mySubscriptions()
  // }

  someFunction() {
    console.log(this.props)
    this.props.userSubscriptions();
  }

    render() {
    return (
      <div className='podcast-list-conatiner'>
        <div className="featured-header">
          <Link to="/podcast-list">
            <p>FEATURED</p>
          </Link>
          <Link to="/subscriptions">
          <p>YOUR PODCASTS</p>
          </Link>
        </div>
        <Masonry className={'my-gallery-class'} style={style} options={masonryOptions} elementType={'ul'}>
        <div className="user stuff">
        <ul>{this.props.user.podcasts}</ul>
            <p>Show me Stuff!</p>

                <br/>

      <br/>
        </div>
        </Masonry>
      </div>
    )

}
}

const mapStateToProps = (state) => {
  return {audio: state, user: state}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userSubscriptions: user => dispatch(userSubscriptions(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
