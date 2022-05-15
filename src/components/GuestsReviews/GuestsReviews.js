import React from 'react';
import { Reviews } from '../Reviews/Reviews';

export const GuestsReviews = () => {
  return (
    <div id="reviews" className="bg-gray-800 py-28 md:p-28">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">Some of reviews and impressions</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <Reviews />
    </div>
  )
}
