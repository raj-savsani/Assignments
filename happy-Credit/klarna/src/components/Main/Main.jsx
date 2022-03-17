import React from "react";
import "./Main.css"
import LeftAside from "./LeftAside/LeftAside";
import RightAside from "./RightAside/RightAside";

function Main() {
  return (
    <div className="mainContainer">
      <LeftAside />
      <RightAside />
    </div>
  );
}

export default Main;
