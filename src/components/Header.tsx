import React from "react";
import styled from "styled-components";
import background from "../images/general/laptop.jpg";
import profileImage from "../images/general/profile.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  animateFade,
  animateSlideLeft,
  animateSlideright,
  animateSlideUp,
} from "../animation";
function Header() {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <motion.h2 variants={animateSlideright} initial="hidden" animate="show">
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
          Download cv
        </ButtonSecondary>
      </StyledHeaderContent>
      <StyledImage />
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
`;

const StyledImage = styled.div`
  width: 30rem;
  height: 100%;

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
`;
const StyledHeaderContent = styled.div`
  width: 50vw;
  margin-left: 10vw;
  color: white;
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
  margin: 0 1rem;
  color: white;
  &:hover {
    background: #23d997;
  }
`;

export default Header;
