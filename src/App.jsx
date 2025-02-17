import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Schedule from "./components/Schedule";
import Team from "./components/Team";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Home />
        <About />
        <Events />
        <Schedule />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default App;
