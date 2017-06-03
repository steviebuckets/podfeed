import React from 'react';
import {Podcast} from './podcast';
// import {connect} from 'react-redux';
// import {userSubscriptions} from '../actions';

const Masonry = require('react-masonry-component');
import {Link} from 'react-router';

const masonryOptions = {};

const style = {};

export class Subscriptions extends React.Component {
  // constructor(props) {
  //   super(props)
  //   // this.audio = "";
  //   // this.user = "";;
  // }
// componentDidMount() {
//   this.props.addPodcast('The Verge');
//
// }
  componentDidMount() {
    // console.log(this.props, "my user data in Subscriptions Component")
    this.props.userSubscriptions();
    console.log(this.props, "in compo did mount")
  }

  render() {

    if (this.props.audio.podcastReducer.length === 0){ /// check that the array is not zero elemnts!!!!
      // podcasts = this.props.audio.podcastReducer
      return (<div>"loadding....."</div>)
    } else {

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
          {
            this.props.audio.podcastReducer.map(podcast => {
              let artist = podcast.user.username + "%2F";
              let title = podcast.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
              const audioPlayer = "https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F" +`${artist}${title}`;
            let imgUrl = "";
            if (podcast.pictures){
              imgUrl = podcast.pictures.large;
            } else {
              imgUrl = podcast.image;
            }

            let id = `${podcast.key},${imgUrl}`; // old school: podcast.key + "," + podcast.pictures.large // very helpful for unsubscribing feature development

            return (
            <span key={id} className='podcast__item'>
                  <iframe width="100%" height="80" className="audio-widget" src={audioPlayer}></iframe>
              <Podcast podcast={podcast} />
              <i className="fa fa-plus-circle fa-2x" aria-hidden="true" id={podcast.key} onClick={this.clickSubscribe}></i>
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

// const mapStateToProps = (state) => {
//   return {audio: state, user: state}
// }
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     userSubscriptions: user => dispatch(userSubscriptions(user))
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);
