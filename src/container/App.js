import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { ScrollButton } from '../components/ScrollButton/ScrollButton';
import { About } from '../pages/About';
import { Booking } from '../pages/Booking';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Program } from '../pages/Program';
import { ThingsToDo } from '../pages/ThingsToDo';

function App() {
  return (
    <HashRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/things_to_do" element={<ThingsToDo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ScrollButton />
        <Footer />
      </>
    </HashRouter>
  );
}

export default App;
