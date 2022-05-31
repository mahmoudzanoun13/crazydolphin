import React from 'react';
import { Header } from '../components/Header/Header';
import { ScrollButton } from '../components/ScrollButton/ScrollButton';
import { Footer } from '../components/Footer/Footer';
import { BookingContent } from '../components/BookingContent/BookingContent';

export const Booking = () => {
  return (
    <>
      <Header />
      <BookingContent />
      <ScrollButton />
      <Footer />
    </>
  )
}
