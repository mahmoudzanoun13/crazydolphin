import React from 'react';
import beachIcon from '../../assets/images/beach_icon.png';
import { Certificates } from '../Certificates/Certificates';

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
        <Certificates />
      </div>
      <hr className="w-full h1 text-white absolute bottom-12 md:bottom-16" />
    </div>
  )
}
