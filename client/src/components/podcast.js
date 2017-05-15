import React from 'react';


export default function Podcast(props) {
    const {podcast} = props;
    return (
        <div className="podcast">
            <a href={podcast.url} className="link">
                <br/>
                <img src={podcast.pictures.large} alt="cover"/>
            </a><br/>

          <a href="#"><i className="fa fa-plus-circle fa-2x" aria-hidden="true"></i></a>
        </div>
    )
}
