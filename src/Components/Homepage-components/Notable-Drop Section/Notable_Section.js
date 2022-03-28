import React from "react";
import Card_Element from "./Card_Element";
import "./Notable_Section.css";

function Notable_Section() {
  let arr = [
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
  ];
  return (
    <div>
      <h1 className="text-center">Notable Drops</h1>
      <div className="row">
        {arr.map((el) => {
          return (
            <div key={Math.random()} className="column">
              <Card_Element img={el} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notable_Section;
