// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Schedule from "./components/Schedule";
import Team from "./components/Team";
import Footer from "./components/Footer";

const App = () => {
  const [explodeAnimation, setExplodeAnimation] = useState(false);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Home />
        <About setExplodeAnimation={setExplodeAnimation} />
        <Events explodeAnimation={explodeAnimation} />
        <Schedule />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default App;