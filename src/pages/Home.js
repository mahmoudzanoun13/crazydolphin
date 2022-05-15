import React from 'react';
import { Carousel } from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import { GuestsReviews } from '../components/GuestsReviews/GuestsReviews';
import { Header } from '../components/Header/Header';
import { WhyUs } from '../components/WhyUs/WhyUs';

export const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Content />
      <WhyUs />
      <GuestsReviews />
    </>
  )
}
