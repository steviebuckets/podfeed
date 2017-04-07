import React from 'react';
import {connect} from 'react-redux';
import Podcast from './podcast';
import * as actions from '../actions/index';

export class PodcastList extends React.Component {
  const { addPodcast } = props;
    constructor(props) {
        super(props);
        this.addPodcast = this.addPodcast.bind(this);
    }

    componentDidMount() {
        // console.log("What do my props/this look like", this);
    }

    addPodcast() {
        // console.log('my props, this.props')
        const podcastName = this.podcastNameInput.value;
        this.props.dispatch(actions.fetchDescription(podcastName));
        // this.props.dispatch(actions.addPodcast(podcastName));
    }

    render() {
        // console.log(this.props, 'what is props?');
        // console.log(this.props.data.slug)
        const podcasts = this.props.podcasts.data.map(podcast => {
            return <Podcast podcast={podcast} key={podcast.name} slug={podcast.slug}/>;

        });
        //  return Object.assign(state, {data: action.description.data});

        //  console.log('podcasts', podcasts);
        return (
            <div className="podcast-list">
                {podcasts}
                <input type="text" ref={ref => this.podcastNameInput = ref}/>
                <button type="button" onClick={this.addPodcast}>
                    Add podcast
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({podcasts: state});

export default connect(mapStateToProps)(PodcastList);
