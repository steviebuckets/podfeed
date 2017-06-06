import React from 'react';
import {Podcast} from './podcast';

const Masonry = require('react-masonry-component');
import {Link} from 'react-router';

const masonryOptions = {};

const style = {};

export class Subscriptions extends React.Component {
  constructor(props) {
    super(props)
    this.deletePodcast = this.deletePodcast.bind(this);
  }

  componentDidMount() {
    this.props.userSubscriptions();
  }

  deletePodcast(event) {
    event.preventDefault()
    this.props.audio.podcastReducer.map(podcast => {
      let id = podcast._id;
      event.target.id = id;
      this.props.unSubscribe(id); 
      location.reload();
    })
  }

  //   console.log(this.props.audio.podcastReducer[0]._id, "my delete props")
  //   // this.props.unSubscribe(event.target.id);
  //   // let _id = this.props.podcast._id
  //   this.props.unSubscribe(this.props.podcast._id);
  //   this.changeColor(event.target.id);
  // }

// this.props.audio.podcastReducer.map(podcast => { /\



  render() {
    (this.props.user, "my pops")
    if (this.props.audio.podcastReducer.length === !0) { /// check that the array is not zero elemnts!!!!
      return (
        <div>"You Have No Podcast Subscriptions"</div>
      )
    } else {
      console.log("You got subscriptions")

      return (
        <div className='podcast-list-conatiner'>
          <div className="featured-header">
            <Link to="/podcast-list">
              <a href="#">FEATURED</a>
            </Link>
            <Link to="/subscriptions">
              <a href="#">SUBSCRIBED</a>
            </Link>
          </div>

          <Masonry className={'my-gallery-class'} style={style} onClick={this.handleClick} options={masonryOptions} elementType={'ul'}>
            {this.props.audio.podcastReducer.map(podcast => {
              // let artist = podcast.user.username + "%2F";
              // let title = podcast.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
              // const audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);

              // let artist = "";
              // let title = "";
              // let audioPlayer = "";
            // const audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);

              let imgUrl = "";
              if (podcast.pictures) {
                imgUrl = podcast.pictures.large;
              } else {
                imgUrl = podcast.image;
              }

              let id = `${podcast.key},${imgUrl}`;

              return (
                <span key={id} className='podcast__item'>

                  <Podcast podcast={podcast}/>
                  <i className="fa fa-minus-circle fa-2x" aria-hidden="true" onClick={this.deletePodcast}></i>
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



//Todo
// Add token to server route for deletion, need token to delete a cast
