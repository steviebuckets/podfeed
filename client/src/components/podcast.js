import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class Podcast extends React.Component {
  // this.state = {
  //   slug: ''
  // }

  // componentDidMount() {
  //   this.props.dispatch(actions.fetchDescription(this.props.podcast.name));
  // }
  render() {
    return(
      <div className="podcast">
      {this.props.podcast.name}
      </div>
    )
  }
}

export default connect()(Podcast);
