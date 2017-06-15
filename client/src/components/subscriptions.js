import React from 'react';
import {Podcast} from './podcast';
import {browserHistory} from 'react-router';

const Masonry = require('react-masonry-component');
import {Link} from 'react-router';

const masonryOptions = {};

const style = {};

export class Subscriptions extends React.Component {
  constructor(props) {
    super(props)
    this.deletePodcast = this.deletePodcast.bind(this);
    this.featuredPage = this.featuredPage.bind(this);
    // this.changeColor = this.changeColor.bind(this);
    // this.state = {
    //   color_red: true
    // }
  }

  componentDidMount() {
    this.props.userSubscriptions();
    console.log(this.props, "user subscriptions")

  }

  deletePodcast(event) {
    event.preventDefault()
    this.props.unSubscribe(event.target.id);
    // location.reload();
  }

  featuredPage() {
    browserHistory.push('/podcast-list')

  }
  render() {

    if (this.props.audio.podcasts.length === 0) {
      return (
        <div>
          <div className="featured-header">
            <Link to="/podcast-list">
              <span href="#" onClick={this.featuredPage}>FEATURED</span>
            </Link>
            <Link to="/subscriptions">
              <span href="#">SUBSCRIBED</span>
            </Link>
          </div>
          <h1 className="alert">"You Have No Subscriptions"</h1>
        </div>
      )
    } else {

      return (
        <div className='podcast-list-conatiner'>
          <div className="featured-header">
            <Link to="/podcast-list">
              <span href="#">FEATURED</span>
            </Link>
            <Link to="/subscriptions">
              <span href="#">SUBSCRIBED</span>
            </Link>
          </div>

          <Masonry className={'my-gallery-class'} style={style} onClick={this.handleClick} options={masonryOptions} elementType={'ul'}>
            {this.props.audio.podcasts.map(podcast => {
              let artist = podcast.artist + "%2F";
              let title = podcast.title + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
              const audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);

              let id = `${podcast._id}`;
              // let id = `${podcast._name}`
              return (
                <span key={podcast.url} className='podcast__item'>

                  <Podcast podcast={podcast} audioPlayer={audioPlayer}/>
                  <i className="fa fa-minus-circle fa-2x" id={id} aria-hidden="true" onClick={this.deletePodcast}></i>
                </span>
              )
            })
}
          </Masonry>
        </div>
      )
    }
  }
}
