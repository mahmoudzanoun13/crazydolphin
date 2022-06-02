import React from 'react';
import diving from '../../assets/images/diving.jpg';
import padi from '../../assets/images/padi.png';
import cmas from '../../assets/images/cmas.png';
import ndl from '../../assets/images/ndl.png';
import dan from '../../assets/images/dan.jpg';
import { useTranslation } from 'react-i18next';

export const Diving = () => {
  const { t } = useTranslation();
  return (
    <div id="diving" className="bg-gray-800">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">{t('diving.1')}</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="flex flex-col items-center py-8 mb-8 bg-slate-300">
        <div className="flex p-2">
          <img loading="lazy" src={padi} alt="padi_icon" className="w-12 h-12 m-2" />
          <img loading="lazy" src={cmas} alt="cmas_icon" className="w-12 h-12 m-2" />
        </div>
        <div className="flex p-2">
          <img loading="lazy" src={ndl} alt="ndl_icon" className="w-12 h-12 m-2" />
          <img loading="lazy" src={dan} alt="dan_icon" className="w-12 h-12 m-2" />
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="container mx-auto px-4 py-10">
          <img loading="lazy" className="rounded-lg w-auto h-auto" src={diving} alt="fish_image" />
        </div>
        <div className="container mx-auto px-4 py-10">
          <h4 className="text-xl font-medium text-white py-8">{t('diving.2')}</h4>
          <p className="text-gray-400">
            {t('diving.3')}<br/>
            {t('diving.4')}<br/><br/>

            {t('diving.5')}<br/>
            {t('diving.6')}<br/>
            {t('diving.7')}<br/><br/>

            {t('diving.8')}<br/>
            {t('diving.9')}<br/>
            {t('diving.10')}<br/><br/>

            {t('diving.11')}<br/>
            {t('diving.12')}<br/>
            {t('diving.13')}<br/>
            {t('diving.14')}<br/><br/>

            {t('diving.15')}<br/>
            {t('diving.16')}<br/>
            {t('diving.17')}<br/><br/>

            {t('diving.18')}<br/>
            {t('diving.19')}<br/><br/>

            {t('diving.20')}<br/>
            {t('diving.21')}<br/>
            {t('diving.22')}<br/>
            {t('diving.23')}<br/>
            {t('diving.24')}<br/><br/>

            {t('diving.25')}<br/>
            {t('diving.26')}<br/><br/>

            {t('diving.27')}<br/>
            {t('diving.28')}<br/>
            {t('diving.29')}<br/>
            {t('diving.30')}<br/>
            {t('diving.31')}<br/>
            {t('diving.32')}<br/><br/>

            {t('diving.33')}<br/>
            {t('diving.34')}<br/>
            {t('diving.35')}<br/>
            {t('diving.36')}<br/>
            {t('diving.37')}<br/><br/>

            {t('diving.38')}<br/>
            {t('diving.39')}<br/>
            {t('diving.40')}<br/>
            {t('diving.41')}<br/>
            {t('diving.42')}<br/><br/>

            {t('diving.43')}<br/>
            {t('diving.44')}<br/>
            {t('diving.45')}<br/>
            {t('diving.46')}<br/>
            {t('diving.47')}<br/><br/>

            {t('diving.48')}<br/>
            {t('diving.49')}<br/>
            {t('diving.50')}<br/>
            {t('diving.51')}<br/>
            {t('diving.52')}<br/><br/>

            {t('diving.53')}<br/>
            {t('diving.54')}<br/>
            {t('diving.55')}<br/>
            {t('diving.56')}<br/>
            {t('diving.57')}<br/><br/><br/>

            {t('diving.58')}<br/><br/>

            {t('diving.59')}<br/><br/>

            {t('diving.60')}<br/>
            {t('diving.61')}<br/>  
            {t('diving.62')}<br/>
            {t('diving.63')}<br/><br/>

            {t('diving.64')}<br/><br/>

            {t('diving.65')}<br/>
            {t('diving.66')}<br/>
            {t('diving.67')}<br/>
            {t('diving.68')}<br/><br/>

            {t('diving.69')}<br/><br/>
          
            {t('diving.70')}<br/>
            {t('diving.71')}<br/>
            {t('diving.72')}<br/><br/>

            {t('diving.73')}<br/><br/>
          
            {t('diving.74')}<br/>
            {t('diving.75')}<br/>
            {t('diving.76')}<br/><br/>

            {t('diving.77')}<br/><br/>

            {t('diving.78')}<br/><br/>

            {t('diving.79')}<br/><br/>

            {t('diving.80')}<br/>
            {t('diving.81')}<br/>
            {t('diving.82')}<br/>
          </p>
        </div>
      </div>
    </div>
  )
}
