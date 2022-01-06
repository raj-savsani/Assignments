import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/" style={{ margin: "20px" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "20px" }}>
        About
      </Link>
      <Link to="/contact" style={{ margin: "20px" }}>
        Contact
      </Link>
      <Link to="/users" style={{ margin: "20px" }}>
        Users List
      </Link>
    </div>
  );
}




export default Navbar;
