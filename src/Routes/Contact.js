import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../Assets/13.jpg"
function Contact() {
    return (
      <>
        <Navbar></Navbar>
        <Hero
          cName="hero-mid"
          heroImg={ContactImg}
          title="Contact"
          btnClass="hide"
        />     
       </>
    );
  }
  
  export default Contact;