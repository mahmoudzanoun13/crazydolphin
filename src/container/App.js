import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/program" element={<Program />} /> */}
          {/* <Route path="/booking" element={<Booking />} /> */}
          {/* <Route path="/things_to_do" element={<ThingsToDo />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
