import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Program } from '../pages/Program';
import { ThingsToDo } from '../pages/ThingsToDo';

function App() {
  return (
    <HashRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          {/* <Route path="/booking" element={<Booking />} /> */}
          <Route path="/things_to_do" element={<ThingsToDo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;
