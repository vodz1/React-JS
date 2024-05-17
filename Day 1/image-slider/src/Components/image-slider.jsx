import React, { Component } from 'react';
import '../Styles/image-slider.module.css'
import image1 from '../Assets/aaaaa.jpg';
import image2 from '../Assets/14.jpg';
import image3 from '../Assets/13.jpg';
import image4 from '../Assets/wewaewa.jpg';

const images = [image1, image2, image3, image4];
  
  class ImageSlider extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentIndex: 0,
        isPlaying: false,
        fade: false
      };
      this.intervalId = null;
    }
  
    componentWillUnmount() {
      this.stopSlideshow();
    }
  
    goToPreviousSlide = () => {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex === 0 ? images.length - 1 : prevState.currentIndex - 1,
        fade: true
      }));
      setTimeout(() => this.setState({ fade: false }), 500);
    };
  
    goToNextSlide = () => {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex === images.length - 1 ? 0 : prevState.currentIndex + 1,
        fade: true
      }));
      setTimeout(() => this.setState({ fade: false }));
    };
  
    playSlideshow = () => {
      if (!this.state.isPlaying) {
        this.setState({ isPlaying: true });
        this.intervalId = setInterval(this.goToNextSlide, 1000);
      }
    };
  
    stopSlideshow = () => {
      if (this.state.isPlaying) {
        this.setState({ isPlaying: false });
        clearInterval(this.intervalId);
      }
    };
  
    render() {
      const { currentIndex, fade, isPlaying } = this.state;
  
      return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="slider d-flex justify-content-between align-items-center">
                <button className="btn btn-primary" onClick={this.goToPreviousSlide}>
                  Previous
                </button>
                <img
                  className={`slider-image img-fluid ${fade ? 'fade' : ''}`}
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                />
                <button className="btn btn-primary" onClick={this.goToNextSlide}>
                  Next
                </button>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-success me-2" onClick={this.playSlideshow} disabled={isPlaying}>
                  Play
                </button>
                <button className="btn btn-danger" onClick={this.stopSlideshow} disabled={!isPlaying}>
                  Stop
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  

export default ImageSlider;