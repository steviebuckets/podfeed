import React from 'react';

export function Podcast(props) {

  return (
    <div className="podcast">
      <a href={props.podcast.url} className="link">
        <br/>
        <img src={props.podcast.pictures.large} alt="cover"/>
      </a><br/>
    </div>
  )
}
