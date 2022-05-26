import React from 'react';
import trips from '../../assets/images/trips.jpg';
import pyramid from '../../assets/images/pyramid.jpg';
import camel from '../../assets/images/camel.jpg';
import mosque from '../../assets/images/mosque.jpg';
import tempelate from '../../assets/images/tempelate.jpg';
import { useTranslation } from 'react-i18next';

export const ThingsToDoContent = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-800 mt-28">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">{t('thingstodocontent.1')}</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="grid md:grid-cols-2">
        <div className="container mx-auto px-4 py-10 flex justify-center md:block">
          <img className="rounded-lg w-auto h-auto" src={trips} alt="fish_image" />
        </div>
        <div className="container mx-auto px-4 py-10 md:order-[-1]">
          <h4 className="text-xl font-medium text-white py-8 text-center">{t('thingstodocontent.1')}</h4>
          <p className="text-gray-400 text-center">
            {t('thingstodocontent.2')}<br/><br/>

            {t('thingstodocontent.3')}<br/>
            {t('thingstodocontent.4')}<br/>
            {t('thingstodocontent.5')}<br/>
            {t('thingstodocontent.6')}<br/>
            {t('thingstodocontent.7')}<br/>
            {t('thingstodocontent.8')}<br/>
            {t('thingstodocontent.9')}<br/>
            {t('thingstodocontent.10')}<br/><br/>

            {t('thingstodocontent.11')}<br/><br/>
            {t('thingstodocontent.12')}<br/><br/>
            {t('thingstodocontent.13')}<br/><br/>
            {t('thingstodocontent.14')}<br/><br/>
            {t('thingstodocontent.15')}<br/>            
            {t('thingstodocontent.16')}<br/><br/>
            {t('thingstodocontent.17')}<br/><br/>
            {t('thingstodocontent.18')}<br/>
            {t('thingstodocontent.19')}<br/><br/>
            {t('thingstodocontent.20')}<br/><br/>
            {t('thingstodocontent.21')}<br/>           
            {t('thingstodocontent.22')}<br/>
            {t('thingstodocontent.23')}<br/><br/>
            {t('thingstodocontent.24')}<br/><br/>
           
            {t('thingstodocontent.25')}<br/>
            {t('thingstodocontent.26')}<br/><br/>
            {t('thingstodocontent.27')}<br/><br/>
            {t('thingstodocontent.28')}<br/><br/>
            {t('thingstodocontent.29')}<br/><br/>
            {t('thingstodocontent.30')}<br/>
            {t('thingstodocontent.31')}
          </p>
        </div>
      </div>
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">{t('thingstodocontent.32')}</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="grid md:grid-cols-4 md:px-28 px-4 pb-40 gap-6">
        <div className="flex justify-center">
          <img src={pyramid} alt="pyramid" className="w-auto h-auto rounded-lg" />
        </div>
        <div className="flex justify-center">
          <img src={camel} alt="camel" className="w-auto h-auto rounded-lg" />
        </div>
        <div className="flex justify-center">
          <img src={mosque} alt="mosque" className="w-auto h-auto rounded-lg" />
        </div>
        <div className="flex justify-center">
          <img src={tempelate} alt="tempelate" className="w-auto h-auto rounded-lg" />
        </div>
      </div>
    </div>
  )
}
