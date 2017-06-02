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
        <br/>
        <img src={image} alt="cover"/>
      </a><br/>
    </div>
  )
}

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
