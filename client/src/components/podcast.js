import React from 'react';

export function Podcast(props) {
  let image = "";
  if (props.podcast.pictures) {
    image = props.podcast.pictures.large;
  } else if (props.podcast.image !== undefined) {
    image = props.podcast.image;
  }

  return (

    <div className="podcast">
      <a href={props.podcast.url} className="link">
        <div className="user-stuff"></div>
        <br/>
        <img src={image} alt="cover"/>
      </a><br/>
    </div>
  )
}
