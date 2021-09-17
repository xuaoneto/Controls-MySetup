import React from "react";
import loading from "../../images/loading.svg";

const InsertSVG = ({ name, width = "10", height = "10" }) => {
  const loadingicon = <img src={loading} width={width} height={height} />;

  const icons = [{ icon: loadingicon, name: "loadingicon" }];

  const icon = icons.find((icons) => icons.name === name);

  return icon.icon;
};

export default InsertSVG;
