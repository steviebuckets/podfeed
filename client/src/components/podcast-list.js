import React from 'react';
import {Podcast} from './podcast';
const Masonry = require('react-masonry-component');
import {Link} from 'react-router';

const masonryOptions = {};
const style = {};

export class PodcastList extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.clickSubscribe = this.clickSubscribe.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      color_blue: true
    }
  }

  componentDidMount() {
    this.props.addPodcast('Interview')

  }


  componentWillMount() {
    // this.props.addPodcast('Interview')
    // window.location.href = '/xx'
    // history.pushState(null, '/');
    // this.props.addPodcast('The Verge')

  }


  // render() {
  //   this.props.addPodcast('The Verge');
  // }

  changeColor() {
    this.setState({
      color_blue: !this.state.color_blue
    });
  }

  clickSubscribe(event) {
    event.preventDefault()
    this.props.newSubscription(event.target.id);
    this.changeColor(event.target.id);
  }

  render() {
    let bgColor = this.state.color_blue
      ? "#03A9F4"
      : "#f44336";
    // console.log('reducer', this.props);
    if (!this.props.audio.podcastReducer) {
      return (
        <div>Loading</div>
      )
    }

    return (
      <div className='podcast-list-conatiner'>
        <div className="featured-header">
          <Link to="/podcast-list">
            <a href="#" className="current">FEATURED</a>
          </Link>
          <Link to="/subscriptions">
            <a href="#">SUBSCRIBED</a>
          </Link>
        </div>
        <Masonry className={'my-gallery-class'} style={style} onClick={this.handleClick} options={masonryOptions} elementType={'ul'}>
          {this.props.audio.podcastReducer.map(podcast => { /// mixcloud!!
            // let artist = podcast.user.username + "%2F";
            // let title = podcast.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
            // const audioPlayer = "https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F" + `${artist}${title}`;
              // const audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);

            // let artist = podcast.user.username + "%2F";
            // let title = podcast.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
            // const audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);


            let imgUrl = "";
            let artist = "";
            let title = "";
            let audioPlayer = "";

            if (podcast.pictures) {
              imgUrl = podcast.pictures.large;
            } else {
              imgUrl = podcast.image;
            }

            if (podcast.user) {
              artist = podcast.user.username + "%2F";
              // title = podcast.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
              // audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);
            }
            if (podcast) {
              title = podcast.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
              audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);
            } else {
              artist = podcast.user.username;
              title = podcast.slug;
            }

            // let imgUrl = "";
            // if (podcast.pictures) {
            //   imgUrl = podcast.pictures.large;
            // } else {
            //   imgUrl = podcast.image;
            // }

            let id = `${podcast.key},${imgUrl},${artist},${title},{audioPlayer}`;

            return (

                // <iframe width="100%" height="80" className="audio-widget" src={audioPlayer}></iframe>
                <span key={id} className='podcast__item'>
                <iframe width="100%" height="80" className="audio-widget" src={audioPlayer}></iframe>

                <Podcast podcast={podcast}/>

                <i className="fa fa-plus-circle fa-2x" aria-hidden="true" style={{
                  color: bgColor
                }} id={id} onClick={this.clickSubscribe}></i>

              </span>
            )
          })}
        </Masonry>
      </div>
    );
  }
}

// <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F sonos %2F be-one-interview
// %2F&hide_cover=1&mini=1" frameborder="0"></iframe>
