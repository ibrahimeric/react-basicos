import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../img/Slider/slider1.webp';
import slider2 from '../img/Slider/slider2.webp';
import slider3 from '../img/Slider/slider3.webp';
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
        <Carousel.Caption>
          <h3>La nueva tendencia</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Exprésate</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Comparte</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;