import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Nav>
      <B>
        <Link to="/">HOME</Link>
      </B>
      <B>
        <Link to="/products">Products</Link>
      </B>
    </Nav>
  );
}

const Nav = styled.div`
  font-size: 25px;
  margin: 10px auto 50px auto;
`;

const B = styled.p`
  display: inline-block;
  font-size: 25px;
  margin: 20px;
  text-decoration: none;
`;

export default Navbar;
