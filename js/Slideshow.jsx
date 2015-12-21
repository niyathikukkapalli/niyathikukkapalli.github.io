import React from 'react';
import Slick from 'react-slick';

const Slideshow = React.createClass({
  propTypes: {
    images: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        src: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired
      })
    ).isRequired,
    index: React.PropTypes.number.isRequired
  },

  renderImages() {
    return this.props.images.map(({ src, description }) => {
      return (
        <div key={src} className="slideshow-image-container">
          <img src={src}/>
          <h2>description</h2>
        </div>
      );
    });
  },

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      useCSS: true,
      initialSlide: this.props.index
    };

    return (
      <Slick {...settings}>
        {this.renderImages()}
      </Slick>
    );
  }
});

export default Slideshow;
