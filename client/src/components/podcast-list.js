import React from 'react';
import {connect} from 'react-redux';
import Podcast from './podcast';
import * as actions from '../actions/index';

export class PodcastList extends React.Component {
  constructor(props) {
    super(props);
    this.addPodcast = this.addPodcast.bind(this);
  }
  componentWillMount(){
    console.log(this.props.podcasts)
  }
  addPodcast() {
    // console.log('my state', this.props)
    const podcastName = this.podcastNameInput.value;
    this.props.dispatch(actions.addPodcast(podcastName));
    this.props.dispatch(actions.fetchDescription(podcastName));

  }
  render() {
    const podcasts = this.props.podcasts.data.map(podcast => {
    return <Podcast podcast={podcast} key={podcast.name} name={podcast.podcast} description={podcast.data.slug} created={podcast.created_time} />;

     });


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
