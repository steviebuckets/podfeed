import React from 'react';


export default function Podcast(props) {
    const {podcast} = props;
    return (
        <div className="podcast">
            
            <a href={podcast.url} className="link">
                <br/>
                <img src={podcast.pictures.large} alt="cover"/>
            </a><br/>
            <button type="button">Subscribe</button>
        </div>
    )
}
