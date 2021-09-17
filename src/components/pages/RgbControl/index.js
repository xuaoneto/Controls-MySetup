import React from "react";
import Slider from "../../Slider";

const RgbControl = ({ name }) => {
  let rows = ["Red", "Green", "Blue"];

  return (
    <div className="sliders-container">
      {rows.map((index) => {
        return <Slider name={`${name}-${index}`} />;
      })}
    </div>
  );
};
export default RgbControl;
