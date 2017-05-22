import React from 'react';

import {Podcast} from './podcast';
const Masonry = require('react-masonry-component');
import {Link} from 'react-router';


const masonryOptions = {};

const style = {};

export class Subscriptions extends React.Component {
  constructor(props) {
    super(props)
    this.audio = "";
    this.user = "";
    this.userSubscriptions = "";

  }


  componentDidMount() {
    console.log(this.props, "my subscription props")
    this.props.userSubscriptions();
    //this will be my call to my subscriptions action to bring back subscribed podcasts
    // this.props.mySubscriptions()
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

        <div className="test">
          <h2>Test</h2>
        </div>
        <Masonry className={'my-gallery-class'} style={style} options={masonryOptions} elementType={'ul'}>
          {this.props.audio.podcastReducer.map(podcast => (
            <span key={podcast.url} className='podcast__item'>
              <Podcast podcast={podcast}/>
              <i className="fa fa-plus-circle fa-2x" aria-hidden="true" id={podcast.key}></i>
            </span>
          ))}
        </Masonry>
      </div>
    )
  }
}
