import { useState } from "react";
import { NavLink } from "react-router-dom";

export const DropDown = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <div className="relative inline-block text-left">
      <div className="group">
        <div>
          <div onClick={handleClick} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 duration-500">
            Program
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        <div className={`${open ? 'block' : 'hidden'} group-hover:block hover:block duration-500 origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <div className="py-1">
            <NavLink to="/program/diving" className="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm duration-500">Diving</NavLink>
            <NavLink to="/program/snorkeling" className="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm duration-500">Snorkeling</NavLink>
            <NavLink to="/program/special_offers" className="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm duration-500">Special Offers</NavLink>
            <NavLink to="/program/prices" className="text-gray-800 hover:text-gray-400 block px-4 py-2 text-sm duration-500">Prices</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropDown;
