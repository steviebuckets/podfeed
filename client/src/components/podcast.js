import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class Podcast extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: this.props.name,
    //   slug: this.props.slug,
    //   created: this.props.created_time
    //
    // }
  }

  componentDidMount() {
    console.log('steve', this.props.podcasts)
    this.props.dispatch(actions.fetchDescription(this.props.podcast.name));
  }
  render() {
    return(
      <div className="podcast">
      {this.props.podcast.name}
      {this.props.podcast.description}
      {this.props.podcast.created}
      </div>
    )
  }
}

export default connect()(Podcast);
