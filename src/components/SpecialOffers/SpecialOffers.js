import React from 'react';
import diveAndDiscount from '../../assets/images/dive_and_discount.jpg';
import airportTransefer from '../../assets/images/airport_transefer.jpg';
import transportationServices from '../../assets/images/transportation_services.jpg';
import diveAndStay from '../../assets/images/dive_and_stay.jpg';

export const SpecialOffers = () => {
  return (
    <div className="bg-gray-800 pb-28">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">Special Offers</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="grid md:grid-cols-3 md:px-28">
        <div className="container mx-auto px-4 py-10">
          <img className="rounded-lg w-auto h-auto" src={diveAndDiscount} alt="fish_image" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-medium text-white py-8">Dive & Discount</h4>
            <p className="text-gray-400 text-center">
              *Book from 4 to 6 diving days and get 10%<br/>
              discount plus 50% discount for 1 night dive<br/><br/>

              *Book from 7 to 10 diving days and get 15%<br/>
              discount plus 75% discount for 1 night dive<br/><br/>

              *Book 11 diving days and more and get 20%<br/>
              discount plus 1 night dive free
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10">
          <img className="rounded-lg w-auto h-auto" src={airportTransefer} alt="fish_image" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-medium text-white py-8">Airport transfer</h4>
            <p className="text-gray-400 text-center">
              Crazy Dolphin will be delighted to arrange for<br/>
              you the transfer upon your arrival or<br/>
              departure. <br/><br/>

              Our special offer – book course with Crazy<br/>
              Dolphin and get transfer from the airport for<br/>
              free!
            </p>
            <img className="rounded-lg w-auto h-auto pt-8" src={diveAndStay} alt="fish_image" />
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-medium text-white py-8">Dive & Stay</h4>
              <p className="text-gray-400 text-center">
                Attractive offers for hotel and diving during<br/>
                your holiday. All our packages have one thing<br/>
                in common – great diving, great people, great<br/>
                value:<br/>
                - Room + daily diving (from 4 days and more)<br/>
                1 dive day includes 2 stops and different<br/>
                places, instructor, lunch and non-alcoholic<br/>
                drinks, equipment.<br/>
                - Room + dive course or intro dive<br/>
                - Room only<br/>
                If you haven’t made up your mind yet<br/>
                regarding your diving plans, book your<br/>
                accommodation and come to arrange the<br/>
                details after arrival on the spot!<br/>
                Accommodation is on the all inclusive or half<br/>
                board basis.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10">
          <img className="rounded-lg w-auto h-auto relative mx-auto" src={transportationServices} alt="fish_image" />
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-medium text-white py-8">Free transportation</h4>
            <p className="text-gray-400 text-center">
              We offer free transportation from the airport<br/>
              to hotel (inside Hurghada) - for the guests<br/>
              who have chosen package “Hotel + diving”.<br/><br/>

              We offer free transfer from/to any hotel in<br/>
              Hurghada within the range from Bella Vista to<br/>
              Palm Beach.<br/><br/>

              Transfer from another places and after<br/>
              Hurghada - extra charge.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
