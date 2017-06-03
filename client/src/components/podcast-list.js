import React from 'react';
import {Podcast} from './podcast';
const Masonry = require('react-masonry-component');
import {Link} from 'react-router';

const masonryOptions = {};
const style = {};

export class PodcastList extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    // this.mine = "https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fstevie-buckets%2Fmsotc09-111614%2F&hide_cover=1&mini=1";
    // this.mine = "https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F/`{${props.podcast.user.username}/%2F/${props.podcast.slug}/%2F&hide_cover=1&mini=1}`";
    // this.mine = "https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F";
    this.clickSubscribe = this.clickSubscribe.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
        color_blue: true
      }
  }


//   getImageURI() {
//   let mine = "https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F"
//   let steve = this.props.podcast.user.username + "%2F";
//   let martin = this.props.podcast.slug + "%2F&hide_cover=1&mini=1";
// }






// <img className="image" src={`images/${this.props.image}`}


  //Path to Audio Embed for Each Podcast
  // api.mixcloud.com/{props.podcast.user.username}/{props.podcast.slug}/embed-html

  componentDidMount() {
    this.props.addPodcast('Interview')
  }

  // componentWillMount() {
  //   this.props.addPodcast('Interview')
  //   // history.pushState(null, '/');
  //   // this.props.addPodcast('The Verge')
  //
  // }

    // let mine = "https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fsonos%2Fbe-one-interview%2F&hide_cover=1&mini=1";
    //
    // <div><iframe width="100%" height="60"
    // src={mine}
    // ></iframe></div>

  changeColor() {
    this.setState({color_blue: !this.state.color_blue});
  }

  clickSubscribe(event) {
    event.preventDefault()
    this.props.newSubscription(event.target.id);
    this.changeColor(event.target.id);
  }

  render() {
    let bgColor = this.state.color_blue ? "#03A9F4" : "#f44336";
    console.log('reducer', this.props);
    if (!this.props.audio.podcastReducer){
      return (<div>Loading</div>)
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
            let artist = podcast.user.username + "%2F";
            let title = podcast.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
            const audioPlayer = "https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F" + `${artist}${title}`;

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
               <iframe width="100%" height="80" className="audio-widget" src={audioPlayer}></iframe>
              <Podcast podcast={podcast}/>

              <i className="fa fa-plus-circle fa-2x" aria-hidden="true" style={{color: bgColor}} id={id} onClick={this.clickSubscribe}></i>

            </span>
          )
        }
        )}
        </Masonry>
      </div>
    );
  }
}



// <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F sonos %2F be-one-interview %2F&hide_cover=1&mini=1" frameborder="0"></iframe>
