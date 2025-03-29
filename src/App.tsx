import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Testimonial } from "./components/Testimonal";
import EventBooking from "./components/EventBooking";
import Pricing from "./components/Pricing";
import { Banner } from "./components/Banner";
import Footer from "./components/Footer";
import {FAQ} from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions'

const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar se incluye fuera de las rutas para que siempre esté visible */} 
      <Navbar />
      <Routes>
        {/* Rutas específicas para cada componente */}
        <Route path="/" element={
          <>
          <Hero />
          <About />
          <Pricing />
          <Banner />
          <Testimonial />
          <EventBooking />
          </>
          } />
        {/* <Route path="/" element={} /> */}
        {/* <Route path="/" element={} />
        <Route path="/" element={} /> */}
        <Route path="/about" element={ <About />} />
        <Route path="/faq" element={ <FAQ />} />

        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />

        <Route path="/TermsAndConditions" element={<TermsAndConditions/>} />
        {/* Ruta para página no encontrada */}
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
