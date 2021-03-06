import React from 'react';

export function Podcast(props) {
  let artist = "";
  let title = "";
  let audioPlayer = "";
  let image = "";
  let key = "";

  if (props.podcast.pictures) {
    image = props.podcast.pictures.large;
  } else if (props.podcast.image !== undefined) {
    image = props.podcast.image;
  }

  if (!props.audioPlayer) {

    if (props.podcast.user) {
      artist = props.podcast.user.username + "%2F";
    }
    if (props.podcast) {
      key = props.podcast._created_time;
      title = props.podcast.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
      audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);
    } else if (props.podcast.user.username === undefined) {}

  } else {
    audioPlayer = props.audioPlayer;
  }

  let id = `${key},${artist},${title},${audioPlayer}`;
  return (

    <div className="podcast">

      <iframe width="100%" height="80" className="audio-widget" id={id} src={audioPlayer}></iframe>

      <a href={props.podcast.url} className="link">
        <br/>
        <img src={image} alt="cover" className="fade-out"/>
      </a><br/>
    </div>
  )
}
