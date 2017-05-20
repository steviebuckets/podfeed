import React from 'react';
import {Podcast} from './podcast';
const Masonry = require('react-masonry-component');
import {Link} from 'react-router';
// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const masonryOptions = {
};

const style = {
};

export class PodcastList extends React.Component {
    constructor(props) {
        super(props)
        this.audio = "";
        this.user = "";
        this.newSubscription = "";
        this.addPodcast = "";
        this.clickSubscribe = this.clickSubscribe.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


    }

    // this.items.append(cast);
    //
    // ('mui-col-md-4').append(items);

    // console.log('props', props);

    // this.props = {audio, addPodcast}// {audio: 'blah', addPodcast: 'meh'}
    componentDidMount() {
      // console.log(this, "what do I have here?")
        this.props.addPodcast('Interview')

    }

    clickSubscribe(event) {
      // console.log("my props", this.props.audio.podcastReducer.map(podcast => (
      //    podcast.key
      // )))
        event.preventDefault()
        //identify the id of the podcast being clicked

        const key = this.props.audio.podcastReducer.map(podcast => (
           podcast.key
        ));

        // console.log(key, "my key")
        // const data = this.props.podcast.key;
        // alert("Hello World")
        // console.log(this)
        this.props.newSubscription(key);

    }



    // podcastGrid(props) {
    //   // const cast= '<Podcast podcast={podcast}/>';
    //   // const items = '<div class="col-md-4"></div>';
    //   this.props.items.append(this.cast);
    //   this.props.row.append(this.items);
    // }

    onSubmit(event) {
        const input = event.target;
        const name = input.value;
        const isEnterKey = (event.which === 13);
        const isLongEnough = name.length > 0;
        if (isEnterKey && isLongEnough) {

            input.value = '';
            this.props.addPodcast(name);

        }
    };

    render() {
        return (
          <div className='podcast-list-conatiner'>
          <div className="featured-header">
        <Link to="/podcast-list"><p>FEATURED</p></Link>
        <p>YOUR PODCASTS</p>
        </div>

        <div className="test">
        <h2>Test</h2>
        </div>
          <Masonry className={'my-gallery-class'} style={style} onClick={this.handleClick} options={masonryOptions} elementType={'ul'}>
                {this.props.audio.podcastReducer.map(podcast => (
                <span key={podcast.url} className='podcast__item'>
                   <Podcast podcast={podcast}/>
                     <i className="fa fa-plus-circle fa-2x" aria-hidden="true" onClick={this.clickSubscribe}></i>
                   </span>
                   ))}
            </Masonry>
              </div>
        )
    }
}




    //original component with podcasts
    //     render(){
    //     return (
    //         <div className='podcast-list'>
    //         <h2>Featured</h2>
    //             SEARCH BAR BELOW - Don't Delete
    //             <input type='text' className='podcast__name' placeholder='Search Podcast' onKeyDown={this.onSubmit}/>
    //             <ul className='podcast__list'>
    //                 {this.props.audio.podcastReducer.map(podcast => (
    //                     <li key={podcast.url} className='podcast__item'>
    //                         <Podcast podcast={podcast}/>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </div>
    //     );
    //   }
