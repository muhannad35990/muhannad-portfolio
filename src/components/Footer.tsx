import {
  Copyright,
  Facebook,
  FaceOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import wave from "../images/general/wave.svg";
const Footer = () => {
  return (
    <Styledfooter>
      <IconsSection>
        <StyledA href="https://www.linkedin.com/in/muhannad-hammada35990">
          <LinkedIn style={{ fontSize: "2rem" }} />
        </StyledA>
        <StyledA href="https://github.com/muhannad35990">
          <GitHub style={{ fontSize: "2rem" }} />
        </StyledA>
        <StyledA href="https://www.linkedin.com/in/muhannad-hammada35990">
          <Facebook style={{ fontSize: "2rem" }} />{" "}
        </StyledA>
        <StyledA href="https://www.linkedin.com/in/muhannad-hammada35990">
          <Instagram style={{ fontSize: "2rem" }} />{" "}
        </StyledA>
        <StyledA href="https://www.linkedin.com/in/muhannad-hammada35990">
          <Twitter style={{ fontSize: "2rem" }} />{" "}
        </StyledA>
      </IconsSection>
      <Styledfootercontent>
        <Copyright style={{ marginRight: ".5rem" }} />
        All rights reserved{" "}
      </Styledfootercontent>
    </Styledfooter>
  );
};

const Styledfooter = styled.div`
  height: 50vh;
  width: 100vw;
  position: relative;
  bottom: 0;
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-size: cover;
`;
const IconsSection = styled.div`
  position: absolute;
  bottom: 6vh;
  right: 4rem;
  z-index: 2;
  color: white;
  font-size: 2rem;
`;
const Styledfootercontent = styled.div`
  position: absolute;
  right: 45vw;
  bottom: 6vh;
  z-index: 2;
  color: white;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const StyledA = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: #23d997;
  }
`;
export default Footer;
