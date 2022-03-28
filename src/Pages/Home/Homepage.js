import React from "react";
import Collections from "../../Components/Homepage-components/Collection_section/Collections";
import Navbar from "../../Components/Homepage-components/Navbar";
import Notable_Section from "../../Components/Homepage-components/Notable-Drop Section/Notable_Section";
import Right_Card from "../../Components/Homepage-components/Right_Card";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Right_Card />
      <Notable_Section />
      <Collections />
    </div>
  );
}

export default Homepage;
