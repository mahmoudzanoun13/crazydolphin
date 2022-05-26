import React from 'react';
import scubaDiving from '../../assets/images/scuba_diving.png';
import { useTranslation } from 'react-i18next';

export const WhyUs = () => {
  const { t } = useTranslation();
  return (
    <div id="whyus" className="bg-gray-800 ">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">{t('whyus.1')}</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="grid md:grid-cols-2 mt-28">
        <div className="container mx-auto px-4 py-10">
          <img className="rounded-lg w-auto h-auto" src={scubaDiving} alt="scuba_diving_photo" />
        </div>
        <div className="container mx-auto px-4 py-10 mt-24">
          <h4 className="text-xl font-medium text-white py-8">{t('whyus.2')}</h4>
          <p className="text-gray-400">
            {t('whyus.3')}<br/><br/>
            {t('whyus.4')}<br/><br/>
            {t('whyus.5')}<br/><br/>
            {t('whyus.6')}
          </p>
        </div>
      </div>
    </div>
  )
}
