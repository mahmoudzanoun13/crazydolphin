import React from 'react';
import ownerPicture from '../../assets/images/owner.jpg';
import teamPicture from '../../assets/images/team.jpg';

export const OwnerAndTeam = () => {
  return (
    <div>
      <div className="flex justify-around mt-10 mr-6">
        <h3 className="hidden md:block text-white text-center text-2xl md:text-4xl font-semibold py-6">OWNER</h3>
        <h3 className="hidden md:block text-white text-center text-2xl md:text-4xl font-semibold py-6">TEAM</h3>
      </div>
      <div className="grid md:grid-cols-2 justify-center my-6 pb-6">
        <div className="grid md:grid-cols-2 justify-center my-6 pb-6">
          <div className="container mx-auto px-4 py-10 flex justify-end">
            <img src={ownerPicture} alt="owner_picture" className="w-56 h-auto rounded-[50%]" />
          </div>
          <div className="container mx-auto px-4 py-10">
            <h4 className="text-xl font-medium text-white py-8">Hady</h4>
            <p className="text-gray-400">
              Crazy Dolphin owner<br/>
              Instructor Rank II NDL<br/>
              Languages: English, Arabic
            </p>
          </div>
        </div>
        <div className="grid justify-center ">
          <img src={teamPicture} alt="team_picture" className="w-80 h-auto rounded-lg" />
        </div>
      </div>
    </div>
  )
}
