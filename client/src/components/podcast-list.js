import React from 'react';
import Podcast from './podcast';
import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 800,
    overflowY: 'auto',
  },
};

export class PodcastList extends React.Component {
  constructor(props) {
    super(props)
      this.audio = "";
      this.addPodcast = "";
      this.onSubmit = this.onSubmit.bind(this);

  }
    // console.log('props', props);

    // this.props = {audio, addPodcast}// {audio: 'blah', addPodcast: 'meh'}
    componentDidMount() {
      this.props.addPodcast('Interview')
    }

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
    <div style={styles.root}>
      <GridList
        cellHeight={400}
        style={styles.gridList}
      >
      <Subheader>Featured</Subheader>
      <input type='text' className='podcast__name' placeholder='Search Podcast' onKeyDown={this.onSubmit}/>
      {this.props.audio.podcastReducer.map(podcast => (
        <GridTile>
        <ul key={podcast.url} className='podcast__item'>
            <Podcast podcast={podcast}/>
        </ul>
        </GridTile>
      ))}
    </GridList>
  </div>

)
}



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
