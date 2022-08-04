import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import HeroPage from "./components/Landing/HeroPage";
import LandingPage from "./components/Landing/LandingPage";
import StudentDetail from "./components/Postal/DetailScreen";
import Portal from "./components/Postal/Portal";
import Settings from "./components/Postal/Settings";
import ConfirmAccount from "./components/Register/ConfirmAccount";
import PasswordReset from "./components/Register/PasswordReset";
import Register from "./components/Register/Register";
import ResetConfirm from "./components/Register/REsetConfirmed";
import ResetScreen from "./components/Register/ResetScreen";
import SignIn from "./components/Register/SignIn";
import ScrollToTop from "./components/ToTop";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/detail" element={<StudentDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/api/user/:id/:token" element={<SignIn />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/confirm" element={<ConfirmAccount />} />
          <Route path="/reset" element={<ResetScreen />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/confirm-reset" element={<ResetConfirm />} />
          <Route
            path="/api/user/change/:id/:token"
            element={<PasswordReset />}
          />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
