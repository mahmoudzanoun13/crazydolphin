import React from 'react';
import { HashLink } from 'react-router-hash-link';

export const ProgramCategories = () => {
  return (
    <div className="bg-gray-800 mt-28">
      <ul className="bg-yellow-500">
        <li className="text-gray-800 p-2 font-semibold">
          Program:
        </li>
        <li className="p-1 md:p-1 m-2">
          -
          <HashLink
            smooth to="/program/#diving"
            className="text-gray-800 p-2 font-semibold hover:text-gray-700 cursor-pointer duration-500 underline opacity-80"
          >
            Diving
          </HashLink>
        </li>
        <li className="p-1 md:p-1 m-2">
          -
          <HashLink
            smooth to="/program/#snorkeling"
            className="text-gray-800 p-2 font-semibold hover:text-gray-700 cursor-pointer duration-500 underline opacity-80"
          >
            Snorkeling
          </HashLink>
        </li>
        <li className="p-1 md:p-1 m-2">
          -
          <HashLink
            smooth to="/program/#special-offers"
            className="text-gray-800 p-2 font-semibold hover:text-gray-700 cursor-pointer duration-500 underline opacity-80"
          >
            Special Offers
          </HashLink>
        </li>
        <li className="p-1 md:p-1 m-2 mb-0">
          -
          <HashLink
            smooth to="/program/#prices"
            className="text-gray-800 p-2 font-semibold hover:text-gray-700 cursor-pointer duration-500 underline opacity-80"
          >
            Prices
          </HashLink>
        </li>
      </ul>
    </div>
  )
}
