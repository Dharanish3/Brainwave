import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./Components/Button";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Benifits from "./Components/Benifits";
import Footer from "./Components/Footer";
import Colloboration from "./Components/Colloboration";
import Pricing from "./Components/Pricing";

function App() {
  return (
    <>
     
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
        <Benifits/>
        <Colloboration/>
        <Pricing/>
        <Footer/>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
