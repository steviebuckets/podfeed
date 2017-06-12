import React from 'react';
import {Podcast} from './podcast';
import { browserHistory } from 'react-router'
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
    //   color_blue: true
    // }

  }

  componentWillMount() {
    this.props.addPodcast('interview')
  }

  // changeColor() {
  //   this.setState({
  //     // color_blue: !this.state.color_blue
  //   });
  // }

  clickSubscribe(event) {
    event.preventDefault()
    this.props.newSubscription(event.target.id);
    alert("You Have Subscribed!")
    // this.changeColor(event.target.id);
    browserHistory.push('/subscriptions')
  }

  subscriptionsPage() {
    browserHistory.push('/subscriptions');
  }

//   const uniqueNames = names.filter((val, id, array) => {
//    return array.indexOf(val) == id;
// });
// Also, you won't even need a return statement if you use es6
//
// const uniqueNames = names.filter((val,id,array) => array.indexOf(val) == id);

  render() {
    // let bgColor = this.state.color_blue
    //   ? "#03A9F4"
    //   : "#03A9F4";
    // if (!this.props.audio.podcasts) {
    //   return (
    //     <div>Loading</div>
    //   )
    // }

// <a href={`/customer/${item._id}`} >{item.get('firstName')} {item.get('lastName')}</a>
// browserHistory.push('/podcast-list');

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
            // let audioPlayer = "";

            if (podcast.pictures) {
              imgUrl = podcast.pictures.large;

            } else {
              imgUrl = podcast.image;
            }

            if(podcast.url) {
              url = podcast.url;
            }

            if (podcast.user) {
              artist = podcast.user.username;
            }

            if (podcast) {
              title = podcast.slug;
            }
            // if (podcast && podcast.user) {
            //   audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);
            // }

            let id = `${podcast.updated_time},${imgUrl},${url},${artist},${title}`;
            // console.log(id, 'ID');

            return (

              <span key={id} className='podcast__item'>

                <Podcast podcast={podcast}/>


                <i className="fa fa-plus-circle fa-2x" aria-hidden="true"
                id={id} onClick={this.clickSubscribe}></i>

              </span>
            )
          })}
        </Masonry>
      </div>
    );
  }
}
