import React, { useEffect, useState } from "react";
import axios from "axios";
import { setLeds } from "../../services/resquests";

const Slider = ({ name }) => {
  const [value, setValue] = useState(0);
  // const [request, setValueAndRequenst] = useState(0);
  // let sliders;
  const setValueOf = () => {
    // sliders = document.getElementsByClassName("slider");
    const slider = document.querySelector(`.${name} #myRange`);
    setValue(slider.value);
  };

  useEffect(() => {
    async function sendValue(name, values) {
      const resp = await setLeds(name, values);
      return resp;
    }
    sendValue(name, value.toString());
  }, [value]);

  // let percent = (value / 260) * 100;

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
          min="255"
          max="0"
          onChange={() => {
            setValueOf();
          }}
          value={value}
          className="slider"
          id="myRange"
          name="status"
        />
        {/* <div
          className="ActivityBarValue"
          style={{ width: percent + "%" }}
        ></div> */}
      </div>
      <p className="value">{value}</p>
    </>
  );
};

export default Slider;
