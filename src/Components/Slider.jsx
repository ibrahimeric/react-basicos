import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://images.hdqwalls.com/download/lai-da-palpuogna-lake-in-switzerland-5k-9v-3840x2160.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>hola</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://images.hdqwalls.com/download/seagulls-in-switzerland-3840x2160.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>alfin</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://images.hdqwalls.com/download/forests-czech-republic-parks-bohemian-switzerland-am-3840x2160.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            xd
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;