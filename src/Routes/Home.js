import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeImg from "../Assets/1.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Hero
      cName="hero"
      heroImg={HomeImg}
      title="Your Adventure Starts Here"
      text="Choose Your Dream Destination"
      buttonText="Travel Plan"
      url="/"
      btnClass="show"
    />
    <Destination></Destination>
    <Trip></Trip>
    <Footer></Footer>
    </>
  );
}

export default Home;