import React from 'react';
import { NavLink } from 'react-router-dom';
import backgroundImage from '../../assets/images/background_image.jpg';
import iconImage from '../../assets/images/icon_image.png';
import { useTranslation } from 'react-i18next';

export const WhatToDo = () => {
  const { t } = useTranslation();
  return (
    <div id="what_to_do">
      <div
        className="w-full h-screen bg-fixed bg-no-repeat bg-cover container mx-auto px-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <img
            className="max-w-full h-auto m-auto pt-24"
            src={iconImage}
            alt="diving_icon"
          />
          <h4 className="mt-12 md:text-4xl text-2xl tracking-wider font-medium text-white text-center">{t('whattodo.1')}</h4>
          <button className="relative left-1/2 -translate-x-1/2 my-12 bg-yellow-500 rounded-full p-5 hover:bg-white transform hover:-translate-y-0.5 focus:outline-none duration-500"><NavLink to="/things_to_do" className="p-5 text-gray-800 text-xl font-medium hover:text-yellow-500 duration-500">{t('whattodo.2')}</NavLink></button>
        </div>
      </div>
    </div>
  )
}
