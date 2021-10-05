import React from "react";
import axios from "axios";

const setLeds = (id, values) => {
  let chars = `${id} ${values}`;
  const resp = axios.post(`/LED`, chars, {
    headers: { "Content-Type": "text/plain", charset: "utf-8" },
  });
  return resp;
};

export { setLeds };
