import React from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Footer } from '../components/Footer/Footer';
import { GoogleMaps } from '../components/GoogleMaps/GoogleMaps';
import { Header } from '../components/Header/Header';
import { ScrollButton } from '../components/ScrollButton/ScrollButton';

export const Contact = () => {
  return (
    <>
      <Header />
      <GoogleMaps />
      <ContactForm />
      <ScrollButton />
      <Footer />
    </>
  )
}
