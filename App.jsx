import React from "react";
import Navbar from "./Components/Nav/Navbar.jsx";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/services/Services.jsx";
import MyWork from "./Components/Mywork/MyWork.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import './index.css'

const App = () => {
  return (
    <div >
      <div >
        <Navbar  />
        <Hero />
        <About />
        <Services />
        <MyWork/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
