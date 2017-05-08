import React from 'react';
import Podcast from './podcast';



export class PodcastList extends React.Component {
    // console.log('props', props);

    // this.props = {audio, addPodcast}// {audio: 'blah', addPodcast: 'meh'}
    componentDidMount() {
      this.props.addPodcast('Podcasts')
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

            // componentDidMount : function(addPodcast) {
            //     addPodcast('The Verge');
            // }

            // const componentDidMount = (addPodcast) => {
            //   addPodcast('The Verge');
            // }
            //
            // componentDidMount();


            // componentDidMount() {
            //     addPodcast('The Verge')
            // }

            // let podcast = 'the verge';
            // console.log('hello from actions', podcast)
            // addPodcast(podcast)

            // fetchDescriptionSuccess(podcastName);
        }
    };
    render(){
    return (
        <div className='podcast-list'>
            <input type='text' className='podcast__name' placeholder='Search Podcast' onKeyDown={this.onSubmit}/>
            <ul className='podcast__list'>
                {this.props.audio.podcastReducer.map(podcast => (
                    <li key={podcast.url} className='podcast__item'>
                        <Podcast podcast={podcast}/>
                    </li>
                ))}
            </ul>
        </div>
    );
  }
}
