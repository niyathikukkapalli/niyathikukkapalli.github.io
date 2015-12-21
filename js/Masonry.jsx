import React from 'react';

const Masonry = React.createClass({
  propTypes: {
    images: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        src: React.PropTypes.string.isRequired
      })
    ).isRequired,
    onSelectImage: React.PropTypes.func.isRequired
  },

  renderImages() {
    return this.props.images.map(({ src }, index) => {
      return (
        <img
          key={src}
          src={src}
          onClick={() => this.props.onSelectImage(index)}
        />
      );
    });
  },

  render() {
    return (
      <div className="masonry-container">
        {this.renderImages()}
      </div>
    );
  }
});

export default Masonry;
