import React from 'react';
import {Podcast} from './podcast';
import {browserHistory} from 'react-router'
const Masonry = require('react-masonry-component');
import {Link} from 'react-router';

const masonryOptions = {};
const style = {};

export class PodcastList extends React.Component {
  constructor(props) {
    super(props)
    this.clickSubscribe = this.clickSubscribe.bind(this);
    this.subscriptionsPage = this.subscriptionsPage.bind(this);
    // this.changeColor = this.changeColor.bind(this);
    // this.state = {
    //   color_faded: false
    // }
    this.changeStatus = this.changeStatus.bind(this);
    this.state = {
      opacity: 0.9
    }

  }

  componentWillMount() {
    this.props.addPodcast('interview')
  }

  // changeColor() {
  //   this.setState({
  //     color_faded: !this.state.color_faded
  //   });
  // }

  changeStatus() {
    this.setState = {
      opacity: 0.3
    }
  }

  clickSubscribe(event) {
    event.preventDefault()
    this.props.newSubscription(event.target.id);
    // this.changeColor(event.target.id);
    this.changeStatus(event.target.id);
    browserHistory.push('/subscriptions')
  }

  subscriptionsPage() {
    browserHistory.push('/subscriptions');
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

    return (
      <div className='podcast-list-conatiner'>
        <div className="featured-header">
          <Link to="/podcast-list">
            <span href="#" className="current">FEATURED</span>
          </Link>
          <Link to="/subscriptions">
            <span onClick={this.subscriptionsPage} href="#">SUBSCRIBED</span>
          </Link>
        </div>
        <Masonry className={'my-gallery-class'} style={style} onClick={this.handleClick} options={masonryOptions} elementType={'ul'}>
          {this.props.audio.podcasts.map(podcast => {
            // console.log(podcast.url, 'my url')
            //To do, add a for loop or filter to remove duplicates

            let imgUrl = "";
            let url = "";
            let artist = "";
            let title = "";

            if (podcast.pictures) {
              imgUrl = podcast.pictures.large;

            } else {
              imgUrl = podcast.image;
            }

            if (podcast.url) {
              url = podcast.url;
            }

            if (podcast.user) {
              artist = podcast.user.username;
            }

            if (podcast) {
              title = podcast.slug;
            }

            let id = `${podcast.updated_time},${imgUrl},${url},${artist},${title}`;

            return (

              <span key={id} className='podcast__item'>
                <div className="subscribed">
                  <Podcast podcast={podcast}/>

                  <i className="fa fa-plus-circle fa-2x" aria-hidden="true" id={id} style={this.state} onClick={this.clickSubscribe}></i>
                </div>

              </span>

            )
          })}
        </Masonry>
      </div>
    );
  }
}
