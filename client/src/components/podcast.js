import React from 'react';

export function Podcast(props) {
  let image = "";
  // let mine = "https://www.mixcloud.com/widget/iframe/?feed=https%3A%2F%2Fwww.mixcloud.com%2Fsonos%2Fbe-one-interview%2F&hide_cover=1&mini=1";
  if (props.podcast.pictures) {
    image = props.podcast.pictures.large;
  } else if (props.podcast.image !== undefined) {
    image = props.podcast.image;
  }

  return (
    <div className="podcast">
      <a href={props.podcast.url} className="link">
        <br/>
        <img src={image} alt="cover"/>
      </a><br/>
    </div>
  )
}
//Path to Audio Embed for Each Podcast
// api.mixcloud.com/{props.podcast.user.username}/{props.podcast.slug}/embed-html

// href={'https://api.mixcloud.com/spartacus/party-time/embed-html/'}


// <img src={props.podcast.pictures ? props.podcast.pictures.large : 'man'} alt="cover"/>

// import React from 'react';
//
// export function Podcast(props) {
//
// console.log(props, 'props')
//   var image = "";
//   // if (something){
//   //   image = prps.
//   // } else if (somthing else ){
//   //   image = ljasdf
//   // }
//   if (image === props.podcast.pictures) {
//     image = props.podcast.pictures
//   } else if (image === props.podcast.pictures.large) {
//     image = props.podcast.pictures.large
//   }
//
//   return (
//     <div className="podcast">
//       <a href={props.podcast.url} className="link">
//         <br/>
//         <img src={image}/>
//
//       </a><br/>
//     </div>
//   )
// }
//
// // <img src={props.podcast.pictures ? props.podcast.pictures.large : 'man'} alt="cover"/>
