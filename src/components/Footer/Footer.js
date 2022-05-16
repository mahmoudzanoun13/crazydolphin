import React from 'react';
import logo from '../../assets/images/logo.jpg';
import tripAdvisor from '../../assets/images/tripadvisor.svg';
import faceBook from '../../assets/images/facebook.svg';
import whatsApp from '../../assets/images/whatsapp.svg';
import youTUbe from '../../assets/images/youtube.svg';
import instagram from '../../assets/images/instagram.svg';
import weChat from '../../assets/images/wechat.svg';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-yellow-500 relative pt-1">
      <div className="container mx-auto px-6">

        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col flex-[2]">
              <img src={logo} alt="logo_image" className="mt-4 md:mt-0 mb-2 w-24 h-auto rounded-lg" />
              <div className="container flex">
                <span className="m-1 bg-white rounded-full hover:opacity-90 duration-500">
                  <a 
                    href="https://www.tripadvisor.com/Attraction_Review-g297549-d7681522-Reviews-Crazy_Dolphin_Diving_Center-Hurghada_Red_Sea_and_Sinai.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={tripAdvisor} alt="tripadvisor_icon" className="p-2" />
                  </a>
                </span>
                <span className="m-1 bg-white rounded-full hover:opacity-90 duration-500">
                  <a 
                    href="https://www.facebook.com/crazydolphindivingcenter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={faceBook} alt="facebook_icon" className="p-2" />
                  </a>
                </span>
                <span className="m-1 bg-white rounded-full hover:opacity-90 duration-500">
                  <a 
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={whatsApp} alt="whatsapp_icon" className="p-2" />
                  </a>
                </span>
                <span className="m-1 bg-white rounded-full hover:opacity-90 duration-500">
                  <a 
                    href="https://www.youtube.com/channel/UCIsggFxOXXieWyFmrNGKyiA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={youTUbe} alt="youtube_icon" className="p-2" />
                  </a>
                </span>
                <span className="m-1 bg-white rounded-full hover:opacity-90 duration-500">
                  <a 
                    href="https://www.instagram.com/crazy_dolphin_diving_center/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagram} alt="instagram_icon" className="p-2" />
                  </a>
                </span>
                <span className="m-1 bg-white rounded-full hover:opacity-90 duration-500">
                  <a 
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={weChat} alt="wechat_icon" className="p-2" />
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <span className="font-bold text-gray-800 uppercase mt-4 md:mt-0 mb-2">COMPANY</span>
              <span className="my-2"><NavLink to="/about" className="text-gray-700  text-md hover:opacity-80 duration-500">About</NavLink></span>
              <span className="my-2"><NavLink to="/program" className="text-gray-700  text-md hover:opacity-80 duration-500">Program</NavLink></span>
              <span className="my-2"><NavLink to="/booking" className="text-gray-700  text-md hover:opacity-80 duration-500">Booking</NavLink></span>
            </div>
            <div className="flex flex-col flex-1">
              <span className="font-bold text-gray-800 uppercase mt-4 md:mt-0 mb-2">CONTACTS</span>
              <span className="my-2"><p className="text-gray-700 text-md">Mobile: +201010506000</p></span>
              <span className="my-2"><p className="text-gray-700  text-md">WhatsApp: +201013118000</p></span>
              <span className="my-2"><p className="text-gray-700 text-md">E-mail: Crazywavesone@yahoo.com</p></span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 bg-gray-800">
        <div className="mt-16 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-white font-bold mb-2">
              Copyright © 2022 Crazy Dolphin Powered by Mahmoud.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
