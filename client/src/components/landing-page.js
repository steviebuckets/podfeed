import React from 'react';

export class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-container">

        <div className="landing-content">
          <h1 className="animated lightSpeedIn">All your podcasts, right here on the web.</h1>
          <h2 className="animated lightSpeedIn">Available anytime, anywhere.</h2>

        </div>

        <div className="mui-container-fluid" id="section-2">
          <div className="mui-row" id="section-2">

            <div className="mui-col-md-4" id="section-2">
              <div>
                <i className="fa fa-podcast fa-3x" aria-hidden="true" id="section-2"></i>

              </div>
              <h2>Discover New Favorites</h2>
              <p>Discover new favorites or search for trending content and much more.</p>
            </div>

            <div className="mui-col-md-4">
              <div>
                <i className="fa fa-play-circle fa-3x" aria-hidden="true"></i>
              </div>
              <h2>Full Playback</h2>
              <p>Play, pause, or rewind. All your favorite podcasts available to stream on the web.</p>
            </div>

            <div className="mui-col-md-4">
              <div>
                <i className="fa fa-rss fa-3x" aria-hidden="true"></i>
              </div>
              <h2>Subscribe</h2>
              <p>Subscribe to your favoirte podcasts, or checkout the featured section.</p>
            </div>

          </div>
        </div>
        <div className="mui-col-md-12">
          <p className="image-header">Discover, Stream, & Subscribe</p>
          <div className="container-image"></div>
        </div>
        <div className="mui-col-md-12">
          <p className="video-demo">Video Demo</p>
          <iframe width="680" className="video" height="435" src="https://www.youtube.com/embed/sIGbuqXsbWM?rel=0" frameborder="0" allowfullscreen></iframe>
        </div>

      </div>
    )
  }
}
