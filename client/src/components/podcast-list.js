import React from 'react';
import {connect} from 'react-redux';
import Podcast from './podcast';
import * as actions from '../actions/index';

export class PodcastList extends React.Component {
  constructor(props) {
    super(props);
    this.addPodcast = this.addPodcast.bind(this);
  }

  componentDidMount(){
    console.log("What do my props/this look like", this);
  }

  addPodcast() {
    // console.log('my props', this.props)
    const podcastName = this.podcastNameInput.value;
    this.props.dispatch(actions.fetchDescription(podcastName));
    // dispatch over here
  }

  render() {
    // map is piciking this data out for me from the podcast object
    // this.podcasts.data.name
    // this.podcasts.data.slug
    // this.podcasts.data.created_time
    // now I use the data I want out, using podcast.whatever (no more this because its declared at the begining of the const)
    console.log(this.props, 'render);')
    const podcasts = this.props.podcasts.data.map(podcast => {
      return <Podcast podcast={podcast} key={podcast.name} slug={podcast.slug} created={podcast.created_time} />;

     });
     console.log('podcasts', podcasts);
    return (
      <div className="podcast-list">
      {podcasts}
      <input type="text" ref={ref => this.podcastNameInput = ref} />
                <button type="button" onClick={this.addPodcast} >
                    Add podcast
                </button>
            </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  podcasts: state
});

export default connect(mapStateToProps)(PodcastList);
