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
    const podcastName = this.podcastNameInput.value;
    this.props.dispatch(actions.addPodcast(podcastName));
    this.props.dispatch(actions.fetchDescription(podcastName));
    //TODO: Add the podcast to the state
  }
  render() {

    const podcasts = this.props.podcasts.data.map(podcast => {
    return <Podcast podcast={podcast} key={podcast.name} />;

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
