import React from 'react';
import { Carousel } from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import { GuestsReviews } from '../components/GuestsReviews/GuestsReviews';
import { WhatToDo } from '../components/WhatToDo/WhatToDo';
import { WhyUs } from '../components/WhyUs/WhyUs';

export const Home = () => {
  return (
    <>
      <Carousel />
      <Content />
      <WhyUs />
      <GuestsReviews />
      <WhatToDo />
    </>
  )
}
