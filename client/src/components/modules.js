// import React from 'react';
//
// export function Podcast(props) {
//   console.log('my props', props)
//   const { podcast } = props;
//   return (
//     <div className="podcast">
//       {podcast.name}
//     </div>
//   )
// }
//
// export function PodcastList(props) {
//   console.log(props, 'props');
//     const {todos, addPodcast} = props;
//
//     const onSubmit = (event) => {
//         const input = event.target;
//         const name = input.value;
//         const isEnterKey = (event.which === 13);
//         const isLongEnough = name.length > 0;
//         if (isEnterKey && isLongEnough) {
//             // console.log("my props", props)
//             input.value = '';
//             addPodcast(name);
//             // fetchDescriptionSuccess(podcastName);
//         }
//     };
//
//     return (
//         <div className='podcast'>
//             <input type='text' className='podcast__name' placeholder='Search Podcast' onKeyDown={onSubmit}/>
//             <ul className='podcast__list'>
//                 {todos.map(podcast => (
//                     <li key={podcast.get('id')}
//                         className='podcast__item'>
//                         <Podcast podcast={podcast.toJS()}/>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
