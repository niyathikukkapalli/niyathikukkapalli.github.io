import React from 'react';
import axios from 'axios';
import Masonry from './Masonry';
import Slideshow from './Slideshow';

const App = React.createClass({
  getInitialState() {
    return {
      images: [],
      index: -1
    };
  },

  componentDidMount() {
    setTimeout(this.loadImages, 1000);
  },

  loadImages() {
    axios.get('/images.json')
      .then(({ data }) => {
        this.setState({ images: data });
      })
      .catch(error => {
        console.error(error);
        this.setState({ error });
      });
  },

  handleSelectImage(index) {
    this.setState({ index });
  },

  handlePreviousImage() {
    this.setState({ index: this.state.index - 1 });
  },

  handleNextImage() {
    this.setState({ index: this.state.index + 1 });
  },

  renderErrorState() {
    return (
      <div className="error-container">
        <h1>Unable to load images</h1>
      </div>
    );
  },

  renderEmptyState() {
    return (
      <div className="empty-container">
        <h1>Loading images...</h1>
      </div>
    );
  },

  renderMasonry() {
    return (
      <Masonry
        images={this.state.images}
        onSelectImage={this.handleSelectImage}
      />
    ); 
  },

  renderSlideshow() {
    return (
      <Slideshow 
        images={this.state.images}
        index={this.state.index}
      />
    );
  },

  renderTitle() {
    return (
      <h1
        className="app-title"
        onClick={() => this.setState({ index: -1 })}
      >
        Niyathi Kukkapalli
      </h1>
    );
  },

  renderAppContent() {
    if (this.state.error) {
      return this.renderErrorState();
    } else if (this.state.images.length === 0) {
      return this.renderEmptyState();
    } else {
      return this.renderMasonry();
    }
  },

  render() {
    return (
      <div className="app-container">
        {this.renderTitle()}
        {this.renderAppContent()}
      </div>
    );
  }
});

export default App;
