import React from 'react';
import { Diving } from '../components/Diving/Diving';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Prices } from '../components/Prices/Prices';
import { ProgramCategories } from '../components/ProgramCategories/ProgramCategories';
import { ScrollButton } from '../components/ScrollButton/ScrollButton';
import { Snorkeling } from '../components/Snorkeling/Snorkeling';
import { SpecialOffers } from '../components/SpecialOffers/SpecialOffers';

export const Program = () => {
  return (
    <div>
      <Header />
      <ProgramCategories />
      <Diving />
      <Snorkeling />
      <SpecialOffers />
      <Prices />
      <ScrollButton />
      <Footer />
    </div>
  )
}
