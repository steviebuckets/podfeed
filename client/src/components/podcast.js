import React from 'react';

export default class Podcast extends React.Component {
  constructor(props) {
    super(props)
    this.podcast = "";
    this.newSubscription = "";
    this.someClickFunction = this.someClickFunction.bind(this);

  }
    // const {podcast, someClickFunction} = props;


    // someClickFunction(event) {
    //   event.preventDefault();
    //
    // // this.props.podcast.key
    //
    //
    // }
    // function for adding podcasts on Subscribe
    someClickFunction(event) {
      event.preventDefault()
      //identify the id of the podcast being clicked
      //on button click the id of the podcast
      // const data = {
      //   podcast: this.props.podcast.url
      // }
      const data = this.props.podcast.key;

      this.props.newSubscription(data);

    }




    render() {

    return (
        <div className="podcast">
            <a href={this.props.podcast.url} className="link">
                <br/>
                <img src={this.props.podcast.pictures.large} alt="cover"/>
            </a><br/>

          <a href="#" onClick={this.someClickFunction}><i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i></a>
        </div>
    )
}
}
