import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { Diving } from '../components/Diving/Diving';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { NotFound } from '../components/NotFound/NotFound';
import { Prices } from '../components/Prices/Prices';
import { ScrollButton } from '../components/ScrollButton/ScrollButton';
import { Snorkeling } from '../components/Snorkeling/Snorkeling';
import { SpecialOffers } from '../components/SpecialOffers/SpecialOffers';
import { About } from '../pages/About';
import { Booking } from '../pages/Booking';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { ThingsToDo } from '../pages/ThingsToDo';

function App() {
  return (
    <HashRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program/diving" element={<Diving />} />
          <Route path="/program/snorkeling" element={<Snorkeling />} />
          <Route path="/program/special_offers" element={<SpecialOffers />} />
          <Route path="/program/prices" element={<Prices />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/things_to_do" element={<ThingsToDo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollButton />
        <Footer />
      </>
    </HashRouter>
  );
}

export default App;
