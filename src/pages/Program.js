import React from 'react';
import { Diving } from '../components/Diving/Diving';
import { Prices } from '../components/Prices/Prices';
import { ProgramCategories } from '../components/ProgramCategories/ProgramCategories';
import { Snorkeling } from '../components/Snorkeling/Snorkeling';
import { SpecialOffers } from '../components/SpecialOffers/SpecialOffers';

export const Program = () => {
  return (
    <div>
      <ProgramCategories />
      <Diving />
      <Snorkeling />
      <SpecialOffers />
      <Prices />
    </div>
  )
}
