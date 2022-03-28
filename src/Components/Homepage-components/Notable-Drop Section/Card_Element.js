import React from "react";
import "./Notable_Section.css";

function Card_Element(props) {
  return (
    <figure className="figure">
      <img
        src={props.img}
        className="figure-img img-fluid rounded"
        alt="A generic square placeholder image with rounded corners in a figure."
      />
    </figure>
  );
}

export default Card_Element;
