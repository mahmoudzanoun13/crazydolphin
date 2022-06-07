import React from 'react';
import snorkeling from '../../assets/images/snorkeling.jpg';
import { useTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';

export const Snorkeling = () => {
  const { t } = useTranslation();
  return (
    <div id="snorkeling" className="bg-gray-800">
      <h3 className="text-white text-center text-4xl md:text-6xl py-6">{t('snorkeling.1')}</h3><br/>
      <div className="container mx-auto px-8 md:grid md:place-items-center">
        <hr className="w-full md:w-1/3 h1 text-white pb-16" />
      </div>
      <div className="grid md:grid-cols-2">
        <Slide right>
          <div className="container mx-auto px-4 py-10">
            <img loading="lazy" className="rounded-lg w-auto h-auto" src={snorkeling} alt="fish_image" />
          </div>
        </Slide>
        <Slide left>
          <div className="container mx-auto px-4 py-10 md:order-[-1]">
            <h4 className="text-xl font-medium text-white py-8">{t('snorkeling.2')}</h4>
            <p className="text-gray-400">
              {t('snorkeling.3')}<br /><br />

              {t('snorkeling.4')}<br />
              {t('snorkeling.5')}<br />
              {t('snorkeling.6')}<br />
              {t('snorkeling.7')}<br />
              {t('snorkeling.8')}<br /><br /><br />

              {t('snorkeling.9')}<br />
              {t('snorkeling.10')}<br />
              {t('snorkeling.11')}<br /><br />

              {t('snorkeling.12')}<br />
              {t('snorkeling.13')}<br /><br />

              {t('snorkeling.14')}<br />
              {t('snorkeling.15')}<br /><br />

              {t('snorkeling.16')}<br />
              {t('snorkeling.17')}<br />
              {t('snorkeling.18')}<br /><br />

              {t('snorkeling.19')}<br />
              {t('snorkeling.20')}
            </p>
          </div>
        </Slide>
      </div>
    </div>
  )
}
