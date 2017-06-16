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
    this.deletePodcast = this.deletePodcast.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      color_blue: true
    }

  }

  componentWillMount() {
    this.props.addPodcast('interview')
    console.log("podcast data", this.props)
  }

  changeColor() {
    this.setState({
      color_blue: !this.state.color_blue
    });
  }

  clickSubscribe(event) {
    event.preventDefault()
    this.props.newSubscription(event.target.id);
    this.changeColor(event.target.id);
    browserHistory.push('/subscriptions')
  }

  deletePodcast(event) {
    event.preventDefault()
    browserHistory.push('/subscriptions');
    // location.reload();
  }

  subscriptionsPage() {
    browserHistory.push('/subscriptions');
  }

  render() {
    let bgColor = this.state.color_blue
      ? "#03A9F4"
      : "#f44336";
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
            console.log(podcast.subscribed, 'status?');
            //To do, add a for loop or filter to remove duplicates

            let imgUrl = "";
            let url = "";
            let artist = "";
            let title = "";
            // let color = "";


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
                  <i className="fa fa-plus-circle fa-2x" aria-hidden="true" id={id} style={{color: bgColor, display: podcast.subscribed ? 'None' : 'block'}} onClick={this.clickSubscribe}></i>

                  <i className="fa fa-minus-circle fa-2x" aria-hidden="true" id={id} style={{color: "#f44336", display: podcast.subscribed ? 'block' : 'none'}} onClick={this.deletePodcast}></i>
                </div>

              </span>

            )
          })}
        </Masonry>
      </div>
    );
  }
}
