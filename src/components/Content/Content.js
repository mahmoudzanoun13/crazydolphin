import React from 'react';
import beachIconLarge from '../../assets/images/beach_icon_large.png';
import beachIconMedium from '../../assets/images/beach_icon_medium.png';
import beachIconSmall from '../../assets/images/beach_icon_small.png';
import { Certificates } from '../Certificates/Certificates';
import { useTranslation } from 'react-i18next';

export const Content = () => {
  const { t } = useTranslation();
  return (
    <div id="content" className="bg-gray-800 relative mt-28">
      <div className="grid md:grid-cols-2">
        <div className="my-20 md:my-64 md:ml-40">
          <img className="px-4 md:pl-0" src={beachIconSmall} alt="beach_icons" srcSet={`${beachIconSmall}, ${beachIconMedium} 2x, ${beachIconLarge} 3x`}/>
          <h3 className="text-yellow-500 px-4 md:pl-0 my-2 text-5xl">{t('content.1')}</h3>
          <div className="container mx-auto px-4 md:pl-0"><hr className="w-full h-1 text-white"/></div>
          <h4 className="text-white px-4 md:pl-0 mt-20 mb-3 text-2xl">{t('content.2')}</h4>
          <p
            className="text-gray-400 px-4 md:pl-0"
          >
            {t('content.3')}<br/>
            {t('content.4')}<br/>
            {t('content.5')}
          </p>
        </div>
        <Certificates />
      </div>
      <hr className="w-full h1 text-white absolute bottom-12 md:bottom-16" />
    </div>
  )
}
