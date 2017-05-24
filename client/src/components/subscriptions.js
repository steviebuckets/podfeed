import React from 'react';

const Masonry = require('react-masonry-component');
import {Link} from 'react-router';
// const {mySubscriptions} = props;

const masonryOptions = {};

const style = {};

export function Subscriptions(props) {

  // componentDidMount() {
  //   // console.log(this.props.userSubscriptions, "my user subscription props")
  //   // const user = this.props.user;
  //   this.props.userSubscriptions("steviebuckets33@gmail.com");
  //   //this will be my call to my subscriptions action to bring back subscribed podcasts
  //   // this.props.mySubscriptions()
  // }

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
        <div className="podcast">

            <p>Show me Stuff!</p>
                <br/>

      <br/>
        </div>
        </Masonry>
      </div>
    )

}
