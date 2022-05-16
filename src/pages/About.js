import React from 'react';
import { Header } from '../components/Header/Header';
import { ScrollButton } from '../components/ScrollButton/ScrollButton';
import { AboutUsContent } from '../components/AboutUsContent/AboutUsContent';
import { GuestsReviews } from '../components/GuestsReviews/GuestsReviews';
import { Footer } from '../components/Footer/Footer';

export const About = () => {
  return (
    <>
      <Header />
      <AboutUsContent />
      <GuestsReviews />
      <ScrollButton />
      <Footer />
    </>
  )
}
