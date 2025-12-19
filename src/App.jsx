import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Service from "./components/services/service";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Work />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
