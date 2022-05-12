import React from 'react';
import { Carousel } from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content';
import { Header } from '../components/Header/Header';

export const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Content />
    </>
  )
}
