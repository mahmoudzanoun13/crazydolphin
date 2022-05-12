import React from 'react';
import beachIcon from '../../assets/images/beach_icon.png';
import certificateOne from '../../assets/images/certificate_1.jpg';
import certificateTwo from '../../assets/images/certificate_2.jpg';
import certificateThree from '../../assets/images/certificate_3.jpg';
import certificateFour from '../../assets/images/certificate_4.jpg';
import certificateFive from '../../assets/images/certificate_5.jpg';
import certificateSix from '../../assets/images/certificate_6.jpg';

export const Content = () => {
  return (
    <div id="content" className="bg-gray-800 relative mt-28">
      <div className="grid md:grid-cols-2">
        <div className="my-20 md:my-64 md:ml-40">
          <img className="px-2 md:pl-0" src={beachIcon} alt="beach_icons"/>
          <h3 className="text-yellow-500 px-4 md:pl-0 my-2 text-5xl">Hello</h3>
          <div className="container mx-auto px-4 md:pl-0"><hr className="w-full h-1 text-white"/></div>
          <h6 className="text-white px-4 md:pl-0 mt-20 mb-3 text-2xl">Welcome!</h6>
          <p
            className="text-gray-400 px-4 md:pl-0"
          >
            Welcome to Crazy Dolphin Aqua and Diving Center! We are the team of like-minded professionals,offering you a full range
            of diving trips and courses, snorkeling and watersport activities.<br/>
            For many years, thousands of visitors have been delighted by the service, provided by our diving center.<br/>
            Here we don't say goodbyes, we just say See you later.
          </p>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide relative pb-52 md:p-28" data-bs-ride="carousel">
          <div className="carousel-indicators absolute right-0 bottom-14 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden mt-52">
            <div className="carousel-item active float-left w-full">
              <img
                src={certificateOne}
                className="block w-full"
                alt="certificate of excellence 2016"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src={certificateTwo}
                className="block w-full"
                alt="certificate of excellence 2017"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src={certificateThree}
                className="block w-full"
                alt="certificate of excellence 2018"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src={certificateFour}
                className="block w-full"
                alt="certificate of excellence 2019"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src={certificateFive}
                className="block w-full"
                alt="certificate of excellence 2020"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src={certificateSix}
                className="block w-full"
                alt="certificate of excellence 2021"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <hr className="w-full h1 text-white absolute bottom-12 md:bottom-16" />
    </div>
  )
}
