// import React from 'react';
// import {connect} from 'react-redux';
// import * as actions from '../actions/index';
//
//
// // // export class Podcast extends React.Component {
// // //   constructor(props) {
// // //     super(props);
// // //     // this.state = {
// // //     //   name: this.props.name,
// // //     //   slug: this.props.slug,
// // //     //   created: this.props.created_time
// // //     //
// // //     // }
// // //   }
// // //
// //   // componentDidMount() {
// //   //   console.log('steve', this.props.podcasts)
// //   //   this.props.dispatch(actions.fetchDescription(this.props.podcast.name));
// //   // }
// // //   render() {
// // //     return(
// // //       <div className="podcast">
// // //       {this.props.podcast.name}
// // //       {this.props.podcast.description}
// // //       {this.props.podcast.created}
// // //       </div>
// // //     )
// // //   }
// // // }
// //
// // // function Podcast(props) {
// // //     // componentDidMount() {
// // //     //   console.log('steve', this.props.podcasts)
// // //     //   this.props.dispatch(actions.fetchDescription(this.props.podcast.name));
// // //     // }
// // //
// // //     return (
// // //         <div className="podcast">
// // //             {props.podcast.name}
// // //             {props.podcast.slug}
// // //         </div>
// // //     )
// // // }
// //
// // // const mapStateToProps = (state, props) => ({podcasts: state});
// // //
// // // export default connect(mapStateToProps)(Podcast);
// //
// export function Podcast(props) {
//   const { podcast } = props;
//   return (
//     <div className="podcast">
//       {podcast.name}
//     </div>
//   )
// }
