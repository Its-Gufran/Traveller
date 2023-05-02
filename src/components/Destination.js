import React from "react";
import Hum1 from "../Assets/hum1.jpg";
import Hum2 from "../Assets/hum2.jpg";
import saf1 from "../Assets/saf1.jpg";
import saf2 from "../Assets/saf2.jpg";  
import Hum3 from "../Assets/hum3.jpg";
import Hum4 from "../Assets/hum4.jpg";
import "./Destination.css";
import DestinationData from "./DestinationData";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Safdarjung Tomb, Delhi"
        text="Safdarjung Tomb is a mausoleum in Delhi, India, built in the 18th
        century as the final resting place for Safdarjung, a powerful
        statesman during the Mughal Empire. The tomb features stunning
        Mughal architecture, with intricate carvings, arched doorways, and a
        beautiful garden surrounding the monument. It is a popular tourist
        attraction and a symbol of Delhi's rich cultural heritage."
        img1={Hum3}
        img2={Hum4}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Humayun Tomb, Delhi"
        text="Humayun's Tomb is a mausoleum in Delhi, India, built in 1570 by Humayun's wife, Haji Begum. It is a UNESCO World Heritage Site and is considered a masterpiece of Mughal architecture. The tomb is surrounded by lush gardens and features intricate designs of red sandstone and white marble. It has been a source of inspiration for many later Mughal-era buildings, including the Taj Mahal."
        img1={saf1}
        img2={saf2}
      />
    </div>
  );
}

export default Destination;
