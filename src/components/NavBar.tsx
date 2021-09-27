import { Link } from 'react-router-dom'
import { LaptopMac } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
function NavBar() {

    return (
        <Nav>
            <StyledLogo>
                <LaptopMac style={{fontSize:'3rem'}}/>
            </StyledLogo>
           <StyledUl >
               <Link to="/">Main</Link>
               <Link to="/projects">Projects</Link>
               <Link to="/contact">Contact me</Link>
           </StyledUl>
        </Nav>
    )
}
const Nav=styled.div`
height:4rem;
background-color: #000;
position: absolute;
top: 0;
width: 100%;
z-index:10;
display: flex;
align-items:center;
border-bottom: 1px solid #000;
`;
const StyledUl=styled.ul`
list-style: none;
display: flex;
align-content: center;
margin-right:1rem;
color: white;
a{
    margin: 0 1rem;
    text-decoration: none;
    color: white;
}
`;
const StyledLogo=styled.div`
color:#23d997;
margin-left: 1rem;
margin-right: auto;
`;
 
export default NavBar
