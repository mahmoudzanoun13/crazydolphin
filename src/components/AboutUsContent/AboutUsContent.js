import React from 'react';
import fishImage from '../../assets/images/fish_image.jpg';
import { OwnerAndTeam } from '../OwnerAndTeam/OwnerAndTeam';
import scubaDiving from '../../assets/images/scuba_diving.png';
import { useTranslation } from 'react-i18next';

export const AboutUsContent = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-800 mt-28">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">{t('aboutuscontent.1')}</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <OwnerAndTeam />
      <div className="grid md:grid-cols-2">
        <div className="container mx-auto px-4 py-10">
          <img className="rounded-lg w-auto h-auto" src={fishImage} alt="fish_image" />
        </div>
        <div className="container mx-auto px-4 py-10">
          <h4 className="text-xl font-medium text-white py-8">{t('aboutuscontent.2')}</h4>
          <p className="text-gray-400">
            {t('aboutuscontent.3')}<br/><br/>
            {t('aboutuscontent.4')}<br/><br/>
            {t('aboutuscontent.5')}<br/><br/>
            {t('aboutuscontent.6')}
          </p>
        </div>
      </div>
      <h5 className="text-white text-center text-2xl md:text-4xl font-semibold py-6 my-14">{t('aboutuscontent.7')}</h5>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="grid md:grid-cols-2 justify-center">
        <div className="container mx-auto px-4 py-10 ">
          <p className="text-gray-400 md:w-[108%]">
            {t('aboutuscontent.8')}<br/>
            {t('aboutuscontent.9')}<br/>
            {t('aboutuscontent.10')}<br/>
            {t('aboutuscontent.11')}<br/>
            {t('aboutuscontent.12')}<br/><br/><br/>
          </p>
          <h4 className="text-xl font-medium text-white py-8">{t('aboutuscontent.13')}</h4>
          <p className="text-gray-400 md:w-[108%]">
            {t('aboutuscontent.14')}<br/>
            {t('aboutuscontent.15')}<br/>
            {t('aboutuscontent.16')}<br/><br/><br/>
          </p>
          <h4 className="text-xl font-medium text-white py-8">{t('aboutuscontent.17')}</h4>
          <p className="text-gray-400 md:w-[108%]">
            {t('aboutuscontent.18')}<br/>
            {t('aboutuscontent.19')}<br/><br/><br/>
          </p>
          <h4 className="text-xl font-medium text-white py-8">{t('aboutuscontent.20')}</h4>
          <p className="text-gray-400 md:w-[108%]">
            {t('aboutuscontent.21')}<br/>
            {t('aboutuscontent.22')}<br/>
            {t('aboutuscontent.23')}<br/><br/><br/>
          </p>
          <h4 className="text-xl font-medium text-white py-8">{t('aboutuscontent.24')}</h4>
          <p className="text-gray-400 md:w-[108%]">
            {t('aboutuscontent.25')}<br/>
            {t('aboutuscontent.26')}<br/>
            {t('aboutuscontent.27')}<br/>
            {t('aboutuscontent.28')}<br/>
            {t('aboutuscontent.29')}<br/>
            {t('aboutuscontent.30')}<br/>
            {t('aboutuscontent.31')}<br/>
            {t('aboutuscontent.32')}<br/><br/><br/>
          </p>
        </div>
        <div className="container mx-auto px-4 py-10 w-3/4">
          <img className="rounded-lg w-auto h-auto" src={scubaDiving} alt="fish_image" />
        </div>
      </div>
      <div className="container mx-auto px-4 md:grid md:place-items-center">
        <hr className="w-full md:w-2/3 h1 text-white mt-28 pb-28" />
      </div>
    </div>
  )
}
