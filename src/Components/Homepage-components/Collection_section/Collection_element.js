import React from "react";

function Collection_element(props) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <h5 className="card-title">{props.email}</h5>
              <h5 className="card-title">{props.phone}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection_element;
