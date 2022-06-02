import React from 'react';
import ownerPicture from '../../assets/images/owner.jpg';
import teamPicture from '../../assets/images/team.jpg';
import { useTranslation } from 'react-i18next';

export const OwnerAndTeam = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex justify-around mt-10 mr-6">
        <h3 className="hidden md:block text-white text-center text-2xl md:text-4xl font-semibold py-6">{t('ownerandteam.1')}</h3>
        <h3 className="hidden md:block text-white text-center text-2xl md:text-4xl font-semibold py-6">{t('ownerandteam.2')}</h3>
      </div>
      <div className="grid md:grid-cols-2 justify-center my-6 pb-6">
        <div className="grid md:grid-cols-2 justify-center my-6 pb-6">
          <div className="container mx-auto px-4 py-10 flex justify-end">
            <img loading="lazy" src={ownerPicture} alt="owner_picture" className="w-56 h-auto rounded-[50%]" />
          </div>
          <div className="container mx-auto px-4 py-10">
            <h4 className="text-xl font-medium text-white py-8">Hady</h4>
            <p className="text-gray-400">
              {t('ownerandteam.3')}<br/>
              {t('ownerandteam.4')}<br/>
              {t('ownerandteam.5')}
            </p>
          </div>
        </div>
        <div className="grid justify-center ">
          <img loading="lazy" src={teamPicture} alt="team_picture" className="w-80 h-auto rounded-lg" />
        </div>
      </div>
    </div>
  )
}
