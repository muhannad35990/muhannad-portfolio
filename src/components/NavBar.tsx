import React from 'react'
import styled from 'styled-components'
function NavBar() {
    const Nav=styled.div`
    height:4rem;
    background-color: #000;
    position: fixed;
    top: 0;
    width: 100%;
    z-index:10;

    `
    return (
        <Nav>
            this is nav
        </Nav>
    )
}

export default NavBar
