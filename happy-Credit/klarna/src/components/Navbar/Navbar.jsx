import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div id="nav">
    <div className="navbar">
      <div>
        <h3>
          <b>Klarna.</b>
        </h3>{" "}
        <h5>Shop</h5> <h5>How it works</h5> <h5>Play in 4</h5> <h5>The shopping app</h5>{" "}
        <h5>Help</h5>
      </div>
      <div>
        <button>Log in</button>
        <button>Get the app</button>
      </div>
    </div>
    </div>
    
  );
}

export default Navbar;
