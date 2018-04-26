import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';
import images from './images';

class GalleryLightBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox (index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }
  handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }
  renderGallery () {
    console.log(images);
    if (!images) return;

    const gallery = images.map((image, i) => {
      return (
        <a
          href={image.src}
          className="gallery__imgWrapper"
          key={i}
          onClick={(e) => this.openLightbox(i, e)}
        >
          <span className="gallery__imgCaption">{image.caption}</span>
          <img src={image.thumbnail} className="gallery_img" />
        </a>
      );
    });

    return (
      <div className="gallery__wrapper">
        {gallery}
      </div>
    );
  }
  render () {
    return (
      <div className="section">
        {this.props.heading && <h2>{this.props.heading}</h2>}
        {this.props.subheading && <p>{this.props.subheading}</p>}
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          preventScroll={this.props.preventScroll}
          showThumbnails={this.props.showThumbnails}
          spinner={this.props.spinner}
          spinnerColor={this.props.spinnerColor}
          spinnerSize={this.props.spinnerSize}
          theme={this.props.theme}
        />
      </div>
    );
  }
}

GalleryLightBox.displayName = 'Gallery';
GalleryLightBox.propTypes = {
  heading: PropTypes.string,
  images: PropTypes.array,
  showThumbnails: PropTypes.bool,
  subheading: PropTypes.string,
};

export default GalleryLightBox;