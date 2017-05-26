import React from 'react';
import {Podcast} from './podcast';
const Masonry = require('react-masonry-component');
import {Link} from 'react-router';

const masonryOptions = {};
const style = {};

export class PodcastList extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.audio = "";
    this.user = "";
    this.newSubscription = "";
    this.addPodcast = "";
    this.userSubscriptions = "";
    this.clickSubscribe = this.clickSubscribe.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

  }

  componentDidMount() {
    // console.log(this.props.user.podcasts.name, "new sub props")
    this.props.addPodcast('Interview')
    // this.props.userSubscriptions()

  }



  clickSubscribe(event) {
    // console.log(event.target.id, 'event');
    event.preventDefault()
    const key = event.target.id;
    this.props.newSubscription(key);

  }

  // clickYourPodcasts() {
  // this.props.userSubscriptions("steviebuckets33@gmail.com");
  // }

//Search for Podcast Func
    // onSubmit(event) {
    //   console.log('hitting search')
    //   const input = event.target;
    //   const name = input.value;
    //   const isEnterKey = (event.which === 13);
    //   const isLongEnough = name.length > 0;
    //   if (isEnterKey && isLongEnough) {
    //
    //     input.value = '';
    //     this.props.addPodcast(name);
    //
    //   }
    // };

  render() {
    return (
      <div className='podcast-list-conatiner'>
        <div className="featured-header">
          <Link to="/podcast-list">
            <p>FEATURED</p>
          </Link>
          <Link to="/subscriptions">
            <p>SUBSCRIBED</p>
          </Link>
        </div>
        <Masonry className={'my-gallery-class'} style={style} onClick={this.handleClick} options={masonryOptions} elementType={'ul'}>
          {this.props.audio.podcastReducer.map(podcast => (
            <span key={podcast.url} className='podcast__item'>
              <Podcast podcast={podcast}/>
              <i className="fa fa-plus-circle fa-2x" aria-hidden="true" id={podcast.key} onClick={this.clickSubscribe}></i>
            </span>
          ))}
        </Masonry>
      </div>
    )
  }
}


//re write subscription component, make it a dumb function, or get rid of it?
//bring newSubscription action into PodcastList Component, make sure to wrap the component in the index.
//create a onClick function when you click the YOUR PODCASTS LINK that runs the newSubscription ACTION which takes in a User
//THEN DO a console.log to see if you are getting back user data

//IF You KEEP Subscription component, MAP through this.props.user.podcasts? to return a user's podcasts in the masonry grid. - just an idea
