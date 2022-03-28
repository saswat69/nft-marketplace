import React, { useEffect, useState } from "react";
import Collection_element from "./Collection_element";
import Collection_filter_button from "./Collection_filter_button";

function Collections() {
  const [collection, setcollection] = useState([]);
  const [showModal, setshowModal] = useState(false);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((response) => {
        setcollection(response.users.splice(0, 10));

        return response;
      });
  }, []);
  const filterhandler = (e) => {
    console.log("xd");
    showModal === true ? setshowModal(false) : setshowModal(true);
  };
  const dateHandler = (ele) => {
    console.log(ele);
    const filtarr = collection.filter((el) => el.firstName.includes(ele));
    setcollection(filtarr);
  };
  return (
    <div>
      <h1>
        Top collections over
        <button onClick={filterhandler}>over 24 hours</button>
        {showModal ? <Collection_filter_button date={dateHandler} /> : null}
      </h1>
      <div className="row">
        {collection.map((el) => (
          <div className="column" key={el.id}>
            <Collection_element
              age={el.age}
              email={el.email}
              name={`${el.firstName} ${el.lastName}`}
              phone={el.phone}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
