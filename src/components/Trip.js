import "./Trip.css";
import TripData from "./TripData";
import Trip1 from "../Assets/1.jpg";
import Trip2 from "../Assets/2.jpg";
import Trip3 from "../Assets/3.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Travel is the only thing you buy that makes you richer.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Indonesia"
          text="Indonesia is the world's largest island country located in Southeast Asia, with over 17,000 islands and a population of around 270 million people. It has a diverse culture with hundreds of ethnic groups, languages, and religions. Its economy is driven by agriculture, manufacturing, and tourism, and it is known for its beautiful beaches and natural attractions."
        />
        <TripData
          image={Trip2}
          heading="Trip to Malaysia"
          text="Malaysia is a country in Southeast Asia, consisting of two regions separated by the South China Sea. It has a diverse population of around 32 million people, with Malay, Chinese, and Indian being the largest ethnic groups. It is known for its beautiful beaches, rainforests, and cultural attractions, and its economy is driven by exports of natural resources, manufacturing, and tourism."
        />
        <TripData
          image={Trip3}
          heading="Trip to France"
          text="France is a country located in Western Europe, with a population of around 67 million people. It is known for its rich history, culture, and cuisine, as well as its famous landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Its economy is driven by industries such as tourism, manufacturing, and agriculture."
        />
      </div>
    </div>
  );
}

export default Trip;
