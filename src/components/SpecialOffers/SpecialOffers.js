import React from 'react';
import diveAndDiscount from '../../assets/images/dive_and_discount.jpg';
import airportTransefer from '../../assets/images/airport_transefer.jpg';
import transportationServices from '../../assets/images/transportation_services.jpg';
import diveAndStay from '../../assets/images/dive_and_stay.jpg';
import { useTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';

export const SpecialOffers = () => {
  const { t } = useTranslation();
  return (
    <div id="special-offers" className="bg-gray-800 pb-28">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">{t('specialoffers.1')}</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="grid md:grid-cols-3 md:px-28">
        <Slide bottom>
          <div className="container mx-auto px-4 py-10">
            <img loading="lazy" className="rounded-lg w-auto h-auto" src={diveAndDiscount} alt="dive_and_discount" />
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-medium text-white py-8">{t('specialoffers.2')}</h4>
              <p className="text-gray-400 text-center">
                {t('specialoffers.3')}<br />
                {t('specialoffers.4')}<br /><br />

                {t('specialoffers.5')}<br />
                {t('specialoffers.6')}<br /><br />

                {t('specialoffers.7')}<br />
                {t('specialoffers.8')}
              </p>
            </div>
          </div>
        </Slide>
        <div className="container mx-auto px-4 py-10">
          <Slide bottom>
            <img loading="lazy" className="rounded-lg w-auto h-auto" src={airportTransefer} alt="airport_transefer" />
          </Slide>
          <div className="flex flex-col items-center">
            <Slide bottom>
              <h4 className="text-xl font-medium text-white py-8">{t('specialoffers.9')}</h4>
              <p className="text-gray-400 text-center">
                {t('specialoffers.10')}<br />
                {t('specialoffers.11')}<br />
                {t('specialoffers.12')}<br /><br />

                {t('specialoffers.13')}<br />
                {t('specialoffers.14')}<br />
                {t('specialoffers.15')}
              </p>
            </Slide>
            <Slide bottom>
              <img loading="lazy" className="rounded-lg w-auto h-auto pt-8" src={diveAndStay} alt="dive_and_stay" />
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-medium text-white py-8">{t('specialoffers.16')}</h4>
              <p className="text-gray-400 text-center">
                {t('specialoffers.17')}<br/>
                {t('specialoffers.18')}<br/>
                {t('specialoffers.19')}<br/>
                {t('specialoffers.20')}<br/>
                {t('specialoffers.21')}<br/>
                {t('specialoffers.22')}<br/>
                {t('specialoffers.23')}<br/>
                {t('specialoffers.24')}<br/>
                {t('specialoffers.25')}<br/>
                {t('specialoffers.26')}<br/>
                {t('specialoffers.27')}<br/>
                {t('specialoffers.28')}<br/>
                {t('specialoffers.29')}<br/>
                {t('specialoffers.30')}<br/>
                {t('specialoffers.31')}<br/>
                {t('specialoffers.32')}
              </p>
            </div>
            </Slide>
          </div>
        </div>
        <Slide bottom>
          <div className="container mx-auto px-4 py-10">
            <img loading="lazy" className="rounded-lg w-auto h-auto relative mx-auto" src={transportationServices} alt="transportation_services" />
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-medium text-white py-8">{t('specialoffers.33')}</h4>
              <p className="text-gray-400 text-center">
                {t('specialoffers.34')}<br />
                {t('specialoffers.35')}<br />
                {t('specialoffers.36')}<br /><br />

                {t('specialoffers.37')}<br />
                {t('specialoffers.38')}<br />
                {t('specialoffers.39')}<br /><br />

                {t('specialoffers.40')}<br />
                {t('specialoffers.41')}
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  )
}
