import React from 'react';
import {Podcast} from './podcast';
const Masonry = require('react-masonry-component');
import {Link} from 'react-router';
// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const masonryOptions = {};

const style = {};

export class PodcastList extends React.Component {
  constructor(props) {
    super(props)
    this.audio = "";
    this.user = "";
    this.newSubscription = "";
    this.addPodcast = "";
    this.clickSubscribe = this.clickSubscribe.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }


  componentDidMount() {
    this.props.addPodcast('Interview')

  }

  clickSubscribe(event) {

    event.preventDefault()

    const key = this.props.audio.podcastReducer.map(podcast => (podcast.key));

    this.props.newSubscription(key);

  }

  onSubmit(event) {
    const input = event.target;
    const name = input.value;
    const isEnterKey = (event.which === 13);
    const isLongEnough = name.length > 0;
    if (isEnterKey && isLongEnough) {

      input.value = '';
      this.props.addPodcast(name);

    }
  };

  render() {
    return (
      <div className='podcast-list-conatiner'>
        <div className="featured-header">
          <Link to="/podcast-list">
            <p>FEATURED</p>
          </Link>
          <p>YOUR PODCASTS</p>
        </div>

        <div className="test">
          <h2>Test</h2>
        </div>
        <Masonry className={'my-gallery-class'} style={style} onClick={this.handleClick} options={masonryOptions} elementType={'ul'}>
          {this.props.audio.podcastReducer.map(podcast => (
            <span key={podcast.url} className='podcast__item'>
              <Podcast podcast={podcast}/>
              <i className="fa fa-plus-circle fa-2x" aria-hidden="true" onClick={this.clickSubscribe}></i>
            </span>
          ))}
        </Masonry>
      </div>
    )
  }
}
