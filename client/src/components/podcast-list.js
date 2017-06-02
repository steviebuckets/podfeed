import React from 'react';
import {Podcast} from './podcast';
const Masonry = require('react-masonry-component');
import {Link} from 'react-router';

const masonryOptions = {};
const style = {};

export class PodcastList extends React.Component {
  constructor(props) {
    super(props)
    this.clickSubscribe = this.clickSubscribe.bind(this);
  }

  componentDidMount() {
    this.props.addPodcast('Interview')
  }

  // componentWillMount() {
  //   this.props.addPodcast('Interview')
  //   // history.pushState(null, '/');
  //   // this.props.addPodcast('The Verge')
  //
  // }

  clickSubscribe(event) {
    event.preventDefault()
    this.props.newSubscription(event.target.id);
  }

  //okay loop through userSubscriptions to pick out the data like you did in podcastLists to get the podcasts.
  //right now render below doesn't have any data because you need to loop through!
  render() {
    console.log('reducer', this.props);
    if (!this.props.audio.podcastReducer){
      return (<div>Loading</div>)

    }

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
          {this.props.audio.podcastReducer.map(podcast => { /// mixcloud!!
            let imgUrl = "";
            if (podcast.pictures){
              imgUrl = podcast.pictures.large;
            } else {
              imgUrl = podcast.image;
            }
            // const pic = {podcast.pictures + 'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/3/f/2/b/23ac-421d-4179-876d-16a7def9ec14'}
            const id = `${podcast.key},${imgUrl}`; // old school: podcast.key + "," + podcast.pictures.large

            return (
            <span key={id} className='podcast__item'>
              <Podcast podcast={podcast}/>
              <i className="fa fa-plus-circle fa-2x" aria-hidden="true" id={id} onClick={this.clickSubscribe}></i>
            </span>
          )
        }
        )}
        </Masonry>
      </div>
    );
  }
}

//re write subscription component, make it a dumb function, or get rid of it?
//bring newSubscription action into PodcastList Component, make sure to wrap the component in the index.
//create a onClick function when you click the YOUR PODCASTS LINK that runs the newSubscription ACTION which takes in a User
//THEN DO a console.log to see if you are getting back user data

//IF You KEEP Subscription component, MAP through this.props.user.podcasts? to return a user's podcasts in the masonry grid. - just an idea
