import React from 'react';
import fishImage from '../../assets/images/fish_image.jpg';
import { OwnerAndTeam } from '../OwnerAndTeam/OwnerAndTeam';

export const AboutUsContent = () => {
  return (
    <div className="bg-gray-800 mt-28">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">About us</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <OwnerAndTeam />
      <div className="grid md:grid-cols-2">
        <div className="container mx-auto px-4 py-10">
          <img className="rounded-lg w-auto h-auto" src={fishImage} alt="fish_image" />
        </div>
        <div className="container mx-auto px-4 py-10">
          <h4 className="text-xl font-medium text-white py-8">Meet Crazy Dolphin</h4>
          <p className="text-gray-400">
            Crazy Dolphin is located at the marina of Sunny Days El Palacio hotel.<br/><br/>
            Our professional and multilingual staff with many years of experience is ready to give you an amazing holiday whether it is above or below the water.<br/><br/>
            We put our S.S.S. mission to provide good Service, Safety and Security.<br/><br/>
            We offer daily diving and dive courses (PADI, NDL), snorkeling, sea trips and excursions. We have insurance for all our guests.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:grid md:place-items-center">
        <hr className="w-full md:w-2/3 h1 text-white mt-28 pb-28" />
      </div>
    </div>
  )
}
