// import React from 'react';
// // import {connect} from 'react-redux';
// import Podcast from './podcast';
// // import * as actions from '../actions/index';
//
// export function PodcastList(props) {
//     const {podcasts, addPodcast, fetchDescriptionSuccess} = props;
//
//     const onSubmit = (event) => {
//         const input = event.target;
//         const podcastName = input.value;
//         const isEnterKey = (event.which === 13);
//         const isLongEnough = podcastName.length > 0;
//
//
//
//         if (isEnterKey && isLongEnough) {
//             // console.log("my props", props)
//             input.value = '';
//             addPodcast(podcastName);
//             fetchDescriptionSuccess(podcastName);
//         }
//     };
//
//     return (
//         <div className='podcast'>
//             <input type='text' className='podcast__name' placeholder='Search Podcast' onKeyDown={onSubmit}/>
//             <ul className='podcast__list'>
//                 {podcasts.data.map(podcast => (
//                     <li key={podcast.get('id')}>
//                         className='podcast__item'
//                         <Podcast podcast={podcast} key={podcast.name}/>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
//
// // const podcasts = this.props.podcasts.data.map(podcast => {
// //              return <Podcast podcast={podcast} key={podcast.name} slug={podcast.slug}/>;
//
// // export class PodcastList extends React.Component {
// //
// //     constructor(props) {
// //         super(props);
// //         this.addPodcast = this.addPodcast.bind(this);
// //     }
// //
// //     componentDidMount() {
// //         // console.log("What do my props/this look like", this);
// //     }
// //
// //     addPodcast() {
// //         // console.log('my props, this.props')
// //         const podcastName = this.podcastNameInput.value;
// //         // this.props.dispatch(actions.fetchDescription(podcastName));
// //         this.props.dispatch(actions.addPodcast(podcastName));
// //     }
// //
// //     render() {
// //         // console.log(this.props, 'what is props?');
// //         // console.log(this.props.data.slug)
// //         const podcasts = this.props.podcasts.data.map(podcast => {
// //             return <Podcast podcast={podcast} key={podcast.name} slug={podcast.slug}/>;
// //
// //         });
// //         //  return Object.assign(state, {data: action.description.data});
// //
// //         //  console.log('podcasts', podcasts);
// //         return (
// //             <div className="podcast-list">
// //                 {podcasts}
// //                 <input type="text" ref={ref => this.podcastNameInput = ref}/>
// //                 <button type="button" onClick={this.addPodcast}>
// //                     Add podcast
// //                 </button>
// //             </div>
// //         );
// //     }
// // }
//
// // const mapStateToProps = (state, props) => ({podcasts: state});
// //
// // export default connect(mapStateToProps)(PodcastList);
