import React from 'react';
import slideOne from '../../assets/images/slide_1.jpg';
import slideTwo from '../../assets/images/slide_2.jpg';
import slideThree from '../../assets/images/slide_3.jpg';
import slideFour from '../../assets/images/slide_4.jpg';

export const Carousel = () => {
  
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide relative top-28 z-10" data-bs-ride="carousel">
      <div className="carousel-inner relative w-full h-[75vh] overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            loading="lazy"
            src={slideOne}
            className="block w-full"
            alt="diving_photo"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            loading="lazy"
            src={slideTwo}
            className="block w-full"
            alt="diving_photo"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            loading="lazy"
            src={slideThree}
            className="block w-full"
            alt="diving_photo"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            loading="lazy"
              src={slideFour}
              className="block w-full"
              alt="diving_photo"
          />
        </div>
      </div>
    </div>
  )
}
