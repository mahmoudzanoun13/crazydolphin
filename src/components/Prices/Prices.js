import React from 'react';
import prices from '../../assets/prices/price_list_en.pdf';
import { useTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';

export const Prices = () => {
  const { t } = useTranslation();
  return (
    <div id="prices" className="bg-gray-800 pb-28 mt-28">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">{t('prices.1')}</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="grid place-items-center md:block md:ml-28">
        <Slide right>
          <h4 className="text-xl font-medium text-white py-8">{t('prices.2')}</h4>
          <p className="text-gray-400">
            {t('prices.3')}
          </p>
        </Slide>
        <div
          className="my-12 bg-white rounded-full p-2 hover:bg-yellow-500 transform hover:-translate-y-0.5 focus:outline-none duration-500 cursor-pointer w-52"
        >
          <a
            href={prices}
            rel="noreferrer"
            target="_blank"
            className="p-2 text-gray-800 text-xl font-medium hover:text-white duration-500 flex justify-center"
            download={prices}
          >
            {t('prices.4')}
          </a>
        </div>
      </div>
    </div>
  )
}
