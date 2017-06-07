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
    // console.log(props.podcast.user.username, "show me bad ones")
  }
  if (props.podcast) {
    title = props.podcast.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
    audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);
  } else if (props.podcast.user.username === undefined) {
    // artist = props.podcast.user.username;
    // title = props.podcast.slug;
    // audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);
    alert('no audio')
  }

//this is what data looks like on server
  //           Key       url: 'https://www.mixcloud.com/DjComplexion/future-beats-radio-070-troy-samuela-interview/',
  // [0]        artist: 'DjComplexion',
  // [0]        title: 'future-beats-radio-070-troy-samuela-interview',
  // [0]        _id: 5938550a30a0d20f383cbb6b },

  // if (props.podcast.user) {
  //   artist = props.podcast.user.username + "%2F";
  //   title = props.podcast.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
  //   audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);
  // } else if (props.podcast.user === undefined){
  //   // console.log('yo!', props.podcast)
  //   artist = props.podcast.user.username + "%2F";
  //   title = props.podcast.slug + "%2F&hide_cover=1&mini=1&hide_artwork=1&light=1";
  //   audioPlayer = (`https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2F${artist}${title}`);
  // }

  //do you need this anymore?
  let id = `${artist},${title},${audioPlayer}`;
  return (
    <div className="podcast">
      <iframe width="100%" height="80" className="audio-widget" id={id} src={audioPlayer}></iframe>
      <a href={props.podcast.url} className="link">
        <br/>
        <img src={image} alt="cover"/>
      </a><br/>
    </div>
  )
}
