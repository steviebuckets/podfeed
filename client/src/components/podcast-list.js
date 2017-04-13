import React from 'react';
import Podcast from './podcast';

export function PodcastList(props) {
    // console.log(podcast, 'my podcasts');
    const {audio, addPodcast} = props; // {audio: 'blah', addPodcast: 'meh'}

    const onSubmit = (event) => {
        const input = event.target;
        const name = input.value;
        const isEnterKey = (event.which === 13);
        const isLongEnough = name.length > 0;
        if (isEnterKey && isLongEnough) {
            // console.log("my props", props)
            input.value = '';
            addPodcast(name);
            // fetchDescriptionSuccess(podcastName);
        }
    };

    return (
        <div className='podcast-list'>
            <input type='text' className='podcast__name' placeholder='Search Podcast' onKeyDown={onSubmit}/>
            <ul className='podcast__list'>
                {audio.map(podcast => (
                    <li key={podcast.url} className='podcast__item'>
                        <Podcast podcast={podcast}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}
