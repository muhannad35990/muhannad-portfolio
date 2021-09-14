import React from "react";
import styled from "styled-components";
import background from '../images/laptop.jpg'
import profileImage from '../images/profile.png'
function Header() {

  return (
    <StyledHeader>
    <StyledImage   />
    </StyledHeader>
  );
}
const StyledHeader=styled.div`
height: 90vh;
width: 100%;
 
 background-image: linear-gradient(
  to right bottom,
  hsla(0, 0%, 0%, 0.8),
  hsla(10, 15%, 0%, .9)
),url(${background});
background-size: cover;
background-repeat: no-repeat;
position: relative;
`;
 
const StyledImage=styled.div`
width: 100%;
height:100%;
position: absolute;
right: 0;
background-image: linear-gradient(
    105deg,
  hsla(0, 0%, 0%, 0.8),
  hsla(10, 15%, 0%, .8),  transparent 50%
), url(${profileImage});
 
background-size: contain;
background-repeat: no-repeat;
background-position: right;
background-blend-mode: screen;
`
export default Header;