import React from 'react';

export function Podcast(props) {
  let artist = "";
  let title = "";
  let audioPlayer = "";
  let image = "";

  if (props.podcast.pictures) {
    image = props.podcast.pictures.large;
  } else if (props.podcast.image !== undefined) {
    image = props.podcast.image;
  }

  if (props.podcast.user) {
    artist = props.podcast.user.username + "%2F";
  }
  if (props.podcast) {
    title = props.podcast.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
    audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);
  } else {
    artist = props.podcast.user.username + "%2F";
    title = props.podcast.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
    audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);
  }

  let id = `${artist},${title},${audioPlayer}`;

  return (

    <div className="podcast">
      <iframe width="100%" height="80" className="audio-widget" src={audioPlayer}></iframe>
      <a href={props.podcast.url} className="link">
        <div className="user-stuff"></div>
        <br/>
        <img src={image} alt="cover"/>
      </a><br/>
    </div>
  )
}


// if (podcast.user) {
//   artist = podcast.user.username + "%2F";
// }
// if (podcast) {
//   title = podcast.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
//   audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);
// } else {
//   artist = podcast.user.username;
//   title = podcast.slug;
// }
//
// let id = `${podcast.key},${imgUrl},${artist},${title},{audioPlayer}`;
//
// return (
//   <span key={id} className='podcast__item'>
//     <iframe width="100%" height="80" className="audio-widget" src={audioPlayer}></iframe>
