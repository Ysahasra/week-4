import React from "react";
import "../style/Cube.css";
import Btn from "./Btn";
function Cube() {
  return (
    <>
      <div className="loader">
        <div className="cell d-0" />
        <div className="cell d-1" />
        <div className="cell d-2" />
        <div className="cell d-1" />
        <div className="cell d-2" />
        <div className="cell d-2" />
        <div className="cell d-3" />
        <div className="cell d-3" />
        <div className="cell d-4" />
      </div>

      <br />
      <br />
      
      <Btn/>
    </>
  );
}

export default Cube;
