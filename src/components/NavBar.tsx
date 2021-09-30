import { Link } from "react-router-dom";
import { LaptopMac } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
function NavBar() {
  const location = useLocation();

  return (
    <Nav>
      <StyledLogo>
        <LaptopMac style={{ fontSize: "3rem" }} />
      </StyledLogo>
      <StyledUl>
        <Tabcontainer>
          <Link to="/">Main</Link>
          {location.pathname === "/" && <Line />}
        </Tabcontainer>

        <Tabcontainer>
          <Link to="/projects">Projects</Link>
          {location.pathname === "/projects" && <Line />}
        </Tabcontainer>

        <Tabcontainer>
          <Link to="/contact">Contact me</Link>
          {location.pathname === "/contact" && <Line />}
        </Tabcontainer>
      </StyledUl>
    </Nav>
  );
}
const Tabcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Line = styled.div`
  height: 4px;
  background-color: #fe8800;
  width: 90%;
  margin-top: 5px;
`;
const Nav = styled.div`
  height: 4rem;
  background-color: #000;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
`;
const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  align-content: center;
  margin-right: 1rem;
  color: white;

  a {
    margin: 0 1rem;
    text-decoration: none;
    color: white;
  }
`;
const StyledLogo = styled.div`
  color: #23d997;
  margin-left: 1rem;
  margin-right: auto;
`;

export default NavBar;
