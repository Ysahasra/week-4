import React from "react";
import "../style/Card.css"
import Btn from "../ui/Btn";
function Card() {
  return (
    <>
      <div className="notification">
        <div className="notiglow" />
        <div className="notiborderglow" />
        <div className="notititle">Welcome To Uiverse</div>
        <div className="notibody">Contribute to Open Source UI Elements</div>
      </div>
      <Btn/>
    </>
  );
}

export default Card;
