import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import HeroPage from "./components/Landing/HeroPage";
import LandingPage from "./components/Landing/LandingPage";
import Register from "./components/Register/Register";
import ScrollToTop from "./components/ToTop";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
