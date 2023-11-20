import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../img/Slider/slider1.jpg';
import slider2 from '../img/Slider/slider2.jpg';
import slider3 from '../img/Slider/slider3.jpg';
import slider4 from '../img/Slider/slider4.jpg';
import '../Styles/Slider.css'

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel"
          src={slider1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src={slider2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src={slider3}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src={slider4}
          alt="four slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;