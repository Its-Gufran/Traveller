import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../Assets/night.jpg"
import Footer from "../components/Footer";
import Trip from "../components/Trip"
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
        <Trip></Trip>
        <Footer></Footer>
      </>
    );
  }
  
  export default Service;