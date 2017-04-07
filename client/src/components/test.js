import React from 'react';
import {connect} from 'react-redux';
// import Podcast from './podcast';
// import * as actions from '../actions/index';

export class Test extends React.Component {
  constructor(props) {
    super(props);
    this.addHello = this.addHello.bind(this);
  }

  componentDidMount(){
    console.log("What do my props/this look like", this);
  }

  addHello() {
    let greeting = "Hi Steve"
    alert(greeting + " this is working");
  }

  render() {

    const podcasts = this.props.podcasts.data.map(podcast => {
      return <h1>Greeting</h1>;

     });

    return (
      <div className="podcast-list">
      {podcasts}
      <input type="text" ref={ref => this.podcastNameInput = ref} />
                <button type="button" onClick={this.addHello} >
                    Add Greeting
                </button>
            </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  podcasts: state
});

export default connect(mapStateToProps)(Test);
