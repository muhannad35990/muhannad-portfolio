import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import logo from "../images/general/logo.png";
import { motion } from "framer-motion";
import { animateWidth } from "../animation";
function NavBar() {
  const location = useLocation();

  return (
    <Nav>
      <StyledLogo src={logo} alt="logo" />
      <StyledUl>
        <Tabcontainer>
          <Link to="/">Main</Link>
          {location.pathname === "/" && (
            <Line variants={animateWidth} initial="hidden" animate="show" />
          )}
        </Tabcontainer>

        <Tabcontainer>
          <Link to="/projects">Projects</Link>
          {location.pathname === "/projects" && (
            <Line variants={animateWidth} initial="hidden" animate="show" />
          )}
        </Tabcontainer>

        <Tabcontainer>
          <Link to="/contact">Contact me</Link>
          {location.pathname === "/contact" && (
            <Line variants={animateWidth} initial="hidden" animate="show" />
          )}
        </Tabcontainer>
      </StyledUl>
    </Nav>
  );
}
const Tabcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    min-width: 33.33333%;
  }
`;
const Line = styled(motion.div)`
  height: 4px;
  background-color: #fe8800;
  width: 90%;
  margin-top: 5px;
  @media (max-width: 800px) {
    height: 2px;
  }
`;
const Nav = styled.div`
  min-height: 7%;
  background-color: #000;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
  @media (max-width: 800px) {
    display: block;
    text-align: center;
  }
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
    @media (max-width: 800px) {
      justify-content: center;
      font-size: 2rem;
    }
  }
`;
const StyledLogo = styled.img`
  color: #23d997;
  margin-left: 1rem;
  margin-right: auto;
  width: 7rem;
  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

export default NavBar;
