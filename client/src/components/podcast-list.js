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
    // this.changeColor = this.changeColor.bind(this);
    // this.state = {
    //   color_blue: true
    // }

  }

  componentDidMount() {
    console.log(this.props, 'props');
    // localStorage.setItem('token')
    this.props.addPodcast('interview')
  }

  // changeColor() {
  //   this.setState({
  //     color_blue: !this.state.color_blue
  //   });
  // }

  clickSubscribe(event) {
    event.preventDefault()
    this.props.newSubscription(event.target.id);
    this.changeColor(event.target.id);
  }

  render() {
    // let bgColor = this.state.color_blue
    //   ? "#03A9F4"
    //   : "#f44336";
    // if (!this.props.audio.podcasts) {
    //   return (
    //     <div>Loading</div>
    //   )
    // }

// <a href={`/customer/${item._id}`} >{item.get('firstName')} {item.get('lastName')}</a>

    return (
      <div className='podcast-list-conatiner'>
        <div className="featured-header">
          <Link to="/podcast-list">
            <span href="#" className="current">FEATURED</span>
          </Link>
          <Link to="/subscriptions">
            <span href="#">SUBSCRIBED</span>
          </Link>
        </div>
        <Masonry className={'my-gallery-class'} style={style} onClick={this.handleClick} options={masonryOptions} elementType={'ul'}>
          {this.props.audio.podcasts.map(podcast => {
            // console.log(podcast.url, 'my url')
            // let imgUrl = "";
            // let url = "";
            // let artist = "";
            // let title = "";
            // let audioPlayer = "";
            //
            // if (podcast.pictures) {
            //   imgUrl = podcast.pictures.large;
            //
            // } else {
            //   imgUrl = podcast.image;
            // }
            //
            // if(podcast.url) {
            //   url = podcast.url;
            // }
            //
            // if (podcast.user) {
            //   artist = podcast.user.username;
            // }
            //
            // if (podcast) {
            //   title = podcast.slug;
            // }
            // if (podcast && podcast.user) {
            //   audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);
            // }

            let id = `${podcast.key}`;

            return (
              <span key={id} className='podcast__item'>
                <Podcast podcast={podcast}/>

                <i className="fa fa-plus-circle fa-2x" aria-hidden="true" style={{
                  // color: bgColor
                }} id={id} onClick={this.clickSubscribe}></i>

              </span>
            )
          })}
        </Masonry>
      </div>
    );
  }
}
