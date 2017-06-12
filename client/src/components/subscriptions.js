import React from 'react';
import {Podcast} from './podcast';
import { browserHistory } from 'react-router';

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
  }


  deletePodcast(event) {
    event.preventDefault()
    this.props.unSubscribe(event.target.id);
    location.reload();
  }

  featuredPage() {
    browserHistory.push('/podcast-list')

  }
  render() {
    // console.log(this.props.audio.podcasts.title, "my damn props!")
    // let artist = "";
    // let title = "";
    // let audioPlayer = "";
    // // this.image = "";
    // // this.key = "";
    //
    // if (this.props.audio.podcasts) {
    //   // console.log(this.props.audio.podcasts, "show me");
    //   // artist = this.props.podcast.artist + "%2F";
    //   // console.log(props.podcast.user.username, "show me bad ones")
    // }
    // if (this.props.audio.podcasts) {
    //   // key = props.podcast._created_time;
    //   title = this.props.audio.podcasts.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
    //   audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);
    // } else if (this.props.podcast.user.username === undefined) {
    //   // artist = props.podcast.user.username;
    //   // title = props.podcast.slug;
    //   // audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);
    //   alert('no audio')
    // }

  // https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/6/2/e/2/87fe-5bf7-4598-ab69-de9585def539.jpg,
  // https://www.mixcloud.com/itssister/s-i-s-t-e-r-episode-2-chris-lorenzo-guestmix-alison-wonderland-interview/,
  // itssister,s-i-s-t-e-r-episode-2-chris-lorenzo-guestmix-alison-wonderland-interview"></i>
  //

    if (this.props.audio.podcasts.length === 0) {
      return (
        <div>
          <div className="featured-header">
            <Link to="/podcast-list">
              <span onClick={this.featuredPage}href="#">FEATURED</span>
            </Link>
            <Link to="/subscriptions">
              <span href="#">SUBSCRIBED</span>
            </Link>
          </div>
          <h1 className="alert">"You Have No Subscriptions"</h1>
        </div>
      )
    } else {
      // console.log("You got subscriptions")

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
                <iframe width="100%" height="80" className="audio-widget" id={id} src={audioPlayer}></iframe>
                  <Podcast podcast={podcast}/>
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
