import React from "react";
let arr = [7, 24];
function Collection_filter_button(props) {
  const changeHandler = (e) => {
    const b = e.target.innerHTML;
    const c = b.split(" ").filter((el) => Number(el));
    let d = +c[0];

    props.date(d);
  };
  return (
    <div>
      {arr.map((el) => (
        <button
          key={Math.random()}
          onClick={changeHandler}
        >{`Filter on ${el}`}</button>
      ))}
    </div>
  );
}

export default Collection_filter_button;
