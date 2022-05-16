import React from 'react';
import { Carousel } from '../components/Carousel/Carousel';
import { Footer } from '../components/Footer/Footer';
import { Content } from '../components/Content/Content';
import { GuestsReviews } from '../components/GuestsReviews/GuestsReviews';
import { Header } from '../components/Header/Header';
import { ScrollButton } from '../components/ScrollButton/ScrollButton';
import { WhatToDo } from '../components/WhatToDo/WhatToDo';
import { WhyUs } from '../components/WhyUs/WhyUs';

export const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Content />
      <WhyUs />
      <GuestsReviews />
      <WhatToDo />
      <ScrollButton />
      <Footer />
    </>
  )
}
