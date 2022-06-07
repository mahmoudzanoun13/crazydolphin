import React from 'react';
import { Link } from 'react-router-dom';
import slideOne from '../../assets/images/slide_1.jpg';
import slideTwo from '../../assets/images/slide_2.jpg';
import slideThree from '../../assets/images/slide_3.jpg';
import slideFour from '../../assets/images/slide_4.jpg';

export const Carousel = () => {
  
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide relative top-28 z-10" data-bs-ride="carousel">
      <div className="carousel-inner relative w-full md:h-[75vh] overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <h1 className="absolute sm:top-1/2 md:top-1/4 top-1/2 left-1/2 -translate-x-1/2 md:text-4xl text-lg text-white font-extrabold">CRAZY DOLPHIN</h1>
          <h2 className="absolute sm:top-1/2 md:top-1/4 top-1/2 md:mt-20 mt-12 left-1/2 -translate-x-1/2 md:text-4xl text-white">DIVING CLUB</h2>
          <button className="hidden md:block absolute top-1/3 mt-28 left-1/2 -translate-x-1/2 bg-white rounded-full p-5 hover:bg-yellow-500 transform hover:-translate-y-0.5 focus:outline-none duration-500"><Link className="p-5 text-gray-500 text-sm font-extralight hover:text-white duration-500" to="about">WHO WE ARE</Link></button>
          <img
            loading="lazy"
            src={slideOne}
            className="block w-full"
            alt="diving_photo"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <h1 className="absolute sm:top-1/2 md:top-1/4 top-1/2 left-1/2 -translate-x-1/2 md:text-4xl text-lg text-white font-extrabold">CRAZY DOLPHIN</h1>
          <h2 className="absolute sm:top-1/2 md:top-1/4 top-1/2 md:mt-20 mt-12 left-1/2 -translate-x-1/2 md:text-4xl text-white">DIVING CLUB</h2>
          <button className="hidden md:block absolute top-1/3 mt-28 left-1/2 -translate-x-1/2 bg-white rounded-full p-5 hover:bg-yellow-500 transform hover:-translate-y-0.5 focus:outline-none duration-500"><Link className="p-5 text-gray-500 text-sm font-extralight hover:text-white duration-500" to="about">WHO WE ARE</Link></button>
          <img
            loading="lazy"
            src={slideTwo}
            className="block w-full"
            alt="diving_photo"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <h1 className="absolute sm:top-1/2 md:top-1/4 top-1/2 left-1/2 -translate-x-1/2 md:text-4xl text-lg text-white font-extrabold">CRAZY DOLPHIN</h1>
          <h2 className="absolute sm:top-1/2 md:top-1/4 top-1/2 md:mt-20 mt-12 left-1/2 -translate-x-1/2 md:text-4xl text-white">DIVING CLUB</h2>
          <button className="hidden md:block absolute top-1/3 mt-28 left-1/2 -translate-x-1/2 bg-white rounded-full p-5 hover:bg-yellow-500 transform hover:-translate-y-0.5 focus:outline-none duration-500"><Link className="p-5 text-gray-500 text-sm font-extralight hover:text-white duration-500" to="about">WHO WE ARE</Link></button>
          <img
            loading="lazy"
            src={slideThree}
            className="block w-full"
            alt="diving_photo"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <h1 className="absolute sm:top-1/2 md:top-1/4 top-1/2 left-1/2 -translate-x-1/2 md:text-4xl text-lg text-white font-extrabold">CRAZY DOLPHIN</h1>
          <h2 className="absolute sm:top-1/2 md:top-1/4 top-1/2 md:mt-20 mt-12 left-1/2 -translate-x-1/2 md:text-4xl text-white">DIVING CLUB</h2>
          <button className="hidden md:block absolute top-1/3 mt-28 left-1/2 -translate-x-1/2 bg-white rounded-full p-5 hover:bg-yellow-500 transform hover:-translate-y-0.5 focus:outline-none duration-500"><Link className="p-5 text-gray-500 text-sm font-extralight hover:text-white duration-500" to="about">WHO WE ARE</Link></button>
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
