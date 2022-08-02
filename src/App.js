import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import HeroPage from "./components/Landing/HeroPage";
import LandingPage from "./components/Landing/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
