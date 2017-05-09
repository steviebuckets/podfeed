import React from 'react';
import Podcast from './podcast';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};


export class PodcastList extends React.Component {
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
            // console.log("my props", props)
            input.value = '';
            this.props.addPodcast(name);

        }
    };

    render() {
      return (


    <div style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        <Subheader>Featured</Subheader>
        {this.props.audio.podcastReducer.map(podcast => (
          <GridTile>
            key={podcast.url}
            <Podcast podcast={podcast}/>
            title={podcast.title}
            subtitle={<span>by <b>{podcast.name}</b></span>}

            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          

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
 // }
}
