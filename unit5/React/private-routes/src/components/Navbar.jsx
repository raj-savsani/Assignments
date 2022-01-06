import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <MainDiv>
      <Link to="/">Home</Link>
      <Link to="login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="settings">Setting</Link>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height:50px;
  font-size: 30px;
  background-color: #ea5c2b;
  a {
    text-decoration: none;
    color: #502064;
  }
`;

export default Navbar;
