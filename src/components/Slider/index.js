import React, { useEffect, useState } from "react";

const Slider = ({ name }) => {
  const [value, setValue] = useState(0);
  const setValueOf = () => {
    const slider = document.querySelector(`.${name} #myRange`);
    setValue(slider.value);
  };
  // useEffect(() => {}, [value]);
  let percent = (value / 267) * 100;

  return (
    <>
      <div
        className={name}
        style={{
          position: "relative",
          height: "15px",
          width: "90%",
          marginTop: "25px",
        }}
      >
        <input
          type="range"
          min="0"
          max="255"
          onChange={() => {
            setValueOf();
          }}
          className="slider"
          id="myRange"
        />
        <div
          className="ActivityBarValue"
          style={{ width: percent + "%" }}
        ></div>
      </div>
      <p className="value">{value}</p>
    </>
  );
};

export default Slider;
