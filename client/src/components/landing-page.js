import React from 'react';

export const LandingPage = (props) => {
    return (
        <div className="landing-container">
          <div className="landing-content">
            <h1>All your podcasts, available in one place on the web.</h1>
            <h2>Available anytime, anywhere.</h2>
          </div>
          <div className="mui-container-fluid">
          <div className="mui-row">

     <div className="mui-col-md-4">
     <div><i className="fa fa-podcast fa-4x" aria-hidden="true"></i></div>
      <h2>Discover New Favorites</h2>
      <p>Amazing podcasts are released
almost every day. We help you
find the best ones.</p>
     </div>

     <div className="mui-col-md-4">
     <div><i className="fa fa-play-circle fa-4x" aria-hidden="true"></i></div>
     <h2>Full Playback</h2>
     <p>Play, pause, or rewind. All your favorite podcasts are avilable to stream on the web.</p>
     </div>

     <div className="mui-col-md-4">
      <div><i className="fa fa-rss fa-4x" aria-hidden="true"></i></div>
      <h2>Subscribe</h2>
      <p>Subscribe to your favoirte podcasts, or checkout our featured section to discover new ones.</p>
     </div>

   </div>
   </div>
        </div>
    )
}
