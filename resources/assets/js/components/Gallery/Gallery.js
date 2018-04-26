import React, { Component } from 'react';
import GalleryLightBox from './GalleryLightBox';

class Gallery extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="hero_img">
          <div className="container">
            <div className="heading_wrapper">
              <h1 className="heading">galerie areálu</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main_contentWrapper">
            <GalleryLightBox />
          </div>
        </div>
      </div>
    )
  }
}
export default Gallery;