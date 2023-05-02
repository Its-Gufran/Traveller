import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../Assets/14'.jpg";
import AboutUs from "../components/AboutUs";
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
      <AboutUs></AboutUs>
      <Footer></Footer>
      </>
    );
  }
  
  export default About;