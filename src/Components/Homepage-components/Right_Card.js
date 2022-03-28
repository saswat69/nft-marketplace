import React from "react";
import "./Right_Card.css";
function Right_Card() {
  return (
    <div className="row ">
      <div className="column parent">
        <h1 className="child">Welcome to NFT-OCEAN</h1>
        <button type="button" className="button btn btn-primary btn-lg">
          Click to See
        </button>
      </div>
      <div className="column">
        <img
          className="card-img-top"
          src="https://picsum.photos/200"
          alt="Card image cap"
          style={{
            width: "550px",
            height: "419px",
          }}
        />
      </div>
    </div>
  );
}

export default Right_Card;
