import React from "react";
import styled from "styled-components";
import background from "../images/general/laptop.jpg";
import profileImage from "../images/general/profile.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  animateFade,
  animateSlideDown,
  animateSlideLeft,
  animateSlideright,
  animateSlideUp,
  animateZoomOut,
} from "../animation";
import LineWave from "./LineWave";
function Header() {
  return (
    <StyledHeader>
      <LineWave />
      <StyledHeaderContent>
        <motion.h2 variants={animateSlideDown} initial="hidden" animate="show">
          Hi!
        </motion.h2>

        <motion.h2 variants={animateSlideLeft} initial="hidden" animate="show">
          I'm <span>Muhannad Hammada</span>
        </motion.h2>

        <motion.h3 variants={animateSlideright} initial="hidden" animate="show">
          Mid-level Web Developer
        </motion.h3>

        <StyledDesciption>
          <motion.p variants={animateFade} initial="hidden" animate="show">
            Contact me for if youy need a software developer{" "}
          </motion.p>
          <motion.p variants={animateFade} initial="hidden" animate="show">
            I'm professional with amazing skills
          </motion.p>
        </StyledDesciption>

        <ButtonPrimary
          variants={animateSlideUp}
          initial="hidden"
          animate="show"
        >
          <Link to="/contact">Contanct me</Link>
        </ButtonPrimary>
        <ButtonSecondary
          variants={animateSlideUp}
          initial="hidden"
          animate="show"
        >
          <a href="./cv/react.js_developer.pdf" download>
            Download cv
          </a>
        </ButtonSecondary>
      </StyledHeaderContent>
      <StyledImage variants={animateZoomOut} initial="hidden" animate="show" />
    </StyledHeader>
  );
}
const StyledHeader = styled.div`
  height: 90vh;
  width: 100%;

  background-image: linear-gradient(
      to right bottom,
      hsla(0, 0%, 0%, 1),
      hsla(10, 15%, 0%, 0.9)
    ),
    url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    display: block;
  }
`;

const StyledImage = styled(motion.div)`
  width: 30rem;
  height: 90%;

  background-image: linear-gradient(
      270deg,
      hsla(0, 0%, 0%, 0.8),
      hsla(10, 15%, 0%, 0.8),
      transparent 70%
    ),
    url(${profileImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  background-blend-mode: screen;
  overflow: hidden;
  z-index: 2;
  @media (max-width: 900px) {
    width: 100%;
    height: 50%;
    background-position: center;
  }
`;
const StyledHeaderContent = styled.div`
  width: 50vw;
  margin-left: 10vw;
  color: white;
  z-index: 2;
  @media (max-width: 900px) {
    width: 100vw;
    padding-top: 15%;
  }
`;

const StyledDesciption = styled.div`
  margin: 1.5rem 0 2rem 0;
  line-height: 2rem;
`;
const ButtonPrimary = styled(motion.button)`
  background-color: #23d997;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    border: 2px solid #23d997;
    background: transparent;
  }
`;
const ButtonSecondary = styled(motion.button)`
  background: transparent;
  border: 2px solid #23d997;
  text-decoration: none;
  padding: 1rem 2rem;
  margin: 0 1rem;
  color: white;

  @media (max-width: 800px) {
    display: block;
    margin: 1rem 0;
  }
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    background: #23d997;
    cursor: pointer;
  }
`;

export default Header;
