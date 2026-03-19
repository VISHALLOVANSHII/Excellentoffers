import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import PartnerOffers from "./pages/PartnerOffers";
import Privacy from "./pages/Privacy";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path="/about" element={<About />} />

        <Route path="/partnerOffers" element={<PartnerOffers />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        {/* <Route path="/terms-of-use" element={<Terms />} /> */}
        {/* <Route path="/newsletter" element={<Newsletter />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
