import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../Assets/14'.jpg"
function About() {
    return (
      <>
      <Navbar></Navbar>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
      </>
    );
  }
  
  export default About;