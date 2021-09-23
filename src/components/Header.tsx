import React from "react";
import styled from "styled-components";
import background from "../images/laptop.jpg";
import profileImage from "../images/profile.png";
function Header() {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <Hide>
          <h2> Hi!</h2>
        </Hide>
        <Hide>
          <h2>
            I'm <span>Muhannad Hammada</span>
          </h2>
        </Hide>
        <Hide>
          <h3>Mid-level Web Developer</h3>
        </Hide>
        <StyledDesciption>
          <p>Contact me for if youy need a software developer </p>
          <p>I'm professional with amazing skills</p>
        </StyledDesciption>

        <ButtonPrimary>Contanct me</ButtonPrimary>
        <ButtonSecondary>Download cv</ButtonSecondary>
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
const ButtonPrimary = styled.button`
  background-color: #23d997;
  color: white;

  &:hover {
    border: 2px solid #23d997;
    background: transparent;
  }
`;
const ButtonSecondary = styled.button`
  background: transparent;
  border: 2px solid #23d997;
  margin: 0 1rem;
  color: white;
  &:hover {
    background: #23d997;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
export default Header;
