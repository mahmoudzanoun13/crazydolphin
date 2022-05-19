import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { ScrollButton } from '../components/ScrollButton/ScrollButton';
import { ThingsToDoContent } from '../components/ThingsToDoContent/ThingsToDoContent';

export const ThingsToDo = () => {
  return (
    <>
      <Header />
      <ThingsToDoContent />
      <ScrollButton />
      <Footer />
    </>
  )
}
