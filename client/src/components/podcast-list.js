import React from 'react';
import Podcast from './podcast';
const Masonry = require('react-masonry-component');
// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';

// const styles = {
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   gridList: {
//     width: 800,
//     height: 800,
//     overflowY: 'auto',
//   },
// };

const masonryOptions = {



};

const style = {

};

export class PodcastList extends React.Component {
    constructor(props) {
        super(props)
        this.audio = "";
        this.addPodcast = "";
        this.onSubmit = this.onSubmit.bind(this);

        //trying to append a row and column
        // this.cast = '<Podcast podcast={podcast}/>';
        // this.items = '<div className="mui-col-md-4">';
        // this.row = '<div className="mui-row">';

    }

    // this.items.append(cast);
    //
    // ('mui-col-md-4').append(items);

    // console.log('props', props);

    // this.props = {audio, addPodcast}// {audio: 'blah', addPodcast: 'meh'}
    componentDidMount() {
        this.props.addPodcast('Interview')
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

    // <input type='text' className='podcast__name' placeholder='Search Podcast' onKeyDown={this.onSubmit}/>
    // // returns a podcast
    // <Podcast podcast={podcast}/>

    render() {
        return (
            <Masonry className={'my-gallery-class'} style={style} onClick={this.handleClick} options={masonryOptions} elementType={'ul'}>

              {this.props.audio.podcastReducer.map(podcast => (
                <a key={podcast.url} className='podcast__item'>
                   <Podcast podcast={podcast}/>
                   </a>
                   ))}
            </Masonry>


        //3rd component with podcasts in a bootstrap grid
        // <div className="mui-container-fluid">
        // {this.props.audio.podcastReducer.map(podcast => (
        //     <div className="mui-row">
        //       <ul key={podcast.url} className='podcast__item'>
        //         <div className="mui-col-md-4">
        //             <Podcast podcast={podcast}/>
        //         </div>
        //          </ul>
        //
        //     </div>
        //   ))}
        // </div>

        // second component with podcasts in a GridList
        //   <div style={styles.root}>
        //     <GridList
        //       cellHeight={400}
        //       style={styles.gridList}
        //     >
        //     <Subheader><p>FEATURED</p></Subheader>
        //     <Subheader><p>YOUR PODCASTS</p></Subheader>
        //
        //     {this.props.audio.podcastReducer.map(podcast => (
        //       <GridTile>
        //       <ul key={podcast.url} className='podcast__item'>
        //           <Podcast podcast={podcast}/>
        //       </ul>
        //       </GridTile>
        //     ))}
        //   </GridList>
        // </div>

        )
    }

    //original component with podcasts
    //     render(){
    //     return (
    //         <div className='podcast-list'>
    //         <h2>Featured</h2>
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
}
