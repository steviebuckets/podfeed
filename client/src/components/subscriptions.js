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

  // deletePodcast(event) {
  //   event.preventDefault()
  //   // event.target.id = id;
  //   this.props.audio.podcastReducer.map(podcast => {
  //     // let id = podcast._id;
  //     this.props.unSubscribe(event.target.i);
  //     // location.reload();
  //     return(
  //     location.reload()
  //   )
  //   })
  // }

  deletePodcast(event) {
    event.preventDefault()
    // event.target.id = id;
    // let id = podcast._id;
      this.props.unSubscribe(event.target.id);
      location.reload();

  }
  render() {
    if (this.props.audio.podcastReducer.length === 0) {
      return (
        <div>
        <div className="featured-header">
          <Link to="/podcast-list">
            <span href="#">FEATURED</span>
          </Link>
          <Link to="/subscriptions">
            <span href="#">SUBSCRIBED</span>
          </Link>
        </div>
        <h1 className="alert">"You Have No Subscriptions"</h1>
        </div>
      )
    } else {
      console.log("You got subscriptions")

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
            {this.props.audio.podcastReducer.map(podcast => {

              let id = `${podcast._id}`;

              return (
                <span key={id} className='podcast__item'>

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


//Todo
// Add token to server route for deletion, need token to delete a cast
