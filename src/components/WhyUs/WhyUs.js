import React from 'react';
import scubaDiving from '../../assets/images/scuba_diving.png';

export const WhyUs = () => {
  return (
    <div id="whyus" className="bg-gray-800 ">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">Why us</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="grid md:grid-cols-2 mt-28">
        <div className="container mx-auto px-4 py-10">
          <img className="rounded-lg w-auto h-auto" src={scubaDiving} alt="scuba_diving_photo" />
        </div>
        <div className="container mx-auto px-4 py-10 mt-24">
          <h4 className="text-xl font-medium text-white py-8">Why Crazy Dolphin</h4>
          <p className="text-gray-400">
            Our professional and multilingual staff with many years of experience is ready to give you an amazing holiday
            whether it is above or below the water.<br/><br/>
            We put our S.S.S. mission to provide good Service, Safety and Security.<br/><br/>
            We offer daily diving and dive courses, snorkeling, sea trips and excursions.<br/><br/>
            We offer daily diving and dive courses (PADI, NDL), snorkeling, sea trips and excursions. We have insurance for 
            all our guests.
          </p>
        </div>
      </div>
    </div>
  )
}
