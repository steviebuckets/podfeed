import React from 'react';


export class Podcast extends React.Component {
  constructor(props) {
    super(props)
    this.podcast = "";
    this.newSubscription = "";
    this.subscribe = this.subscribe.bind(this);

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
    subscribe(event) {
      event.preventDefault()
      //identify the id of the podcast being clicked
      //on button click the id of the podcast
      const key = {
        podcast: this.props.podcast.key
      }
      // const data = this.props.podcast.key;
      // alert("Hello World")
      // console.log(this)
      this.props.newSubscription(key);

    }



    render() {
    return (
        <div className="podcast">
            <a href={this.props.podcast.url} className="link">
                <br/>
                <img src={this.props.podcast.pictures.large} alt="cover"/>
            </a><br/>

      <i className="fa fa-plus-circle fa-2x" aria-hidden="true" onClick={this.subscribe}></i>
        </div>
    )
}
}
// onClick={this.handleClick}
