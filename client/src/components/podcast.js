import React from 'react';

export default function Podcast(props) {
    console.log('my props', props)
    const {podcast} = props;
    return (
        <div className="podcast">
            {podcast.name}<br/>
            <a href={podcast.url} className="link">
                <br/>
                <img src={podcast.pictures.large} alt="cover"/>
            </a><br/>
            <button type="button">Subscribe</button>
        </div>
    )
}
