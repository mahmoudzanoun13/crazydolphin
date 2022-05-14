import React from 'react';
import certificateOne from '../../assets/images/certificate_1.jpg';
import certificateTwo from '../../assets/images/certificate_2.jpg';
import certificateThree from '../../assets/images/certificate_3.jpg';
import certificateFour from '../../assets/images/certificate_4.jpg';
import certificateFive from '../../assets/images/certificate_5.jpg';
import certificateSix from '../../assets/images/certificate_6.jpg';

export const Certificates = () => {
  return (
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
  )
}
