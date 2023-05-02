import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../Assets/night.jpg"

function Service() {
    return (
      <>
        <Navbar></Navbar>
        <Hero
          cName="hero-mid"
          heroImg={ServiceImg}
          title="Service"
          btnClass="hide"
        />
      </>
    );
  }
  
  export default Service;