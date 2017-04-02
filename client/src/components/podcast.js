import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class Podcast extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // console.log('steves', props)
  //   // this.state = {
  //   //   name: ' ',
  //   //   slug: ' ',
  //   //   created: ' '
  //   //
  //   // }
  // }
// somefunction() {
//   console.log('steves', this.state)
// }

  componentDidMount() {
    console.log(this.props.podcasts)
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
