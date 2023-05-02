import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm"
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
        <ContactForm></ContactForm>
        <Footer></Footer>   
       </>
    );
  }
  
  export default Contact;