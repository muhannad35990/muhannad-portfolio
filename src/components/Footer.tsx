import { Facebook, FaceOutlined, GitHub, Instagram, LinkedIn, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import wave from '../images/wave.svg'
const Footer = () => {
    return (
        <Styledfooter>
            <IconsSection>
            <LinkedIn style={{fontSize:'2rem'}}/>
            <GitHub style={{fontSize:'2rem'}}/>
            <Facebook style={{fontSize:'2rem'}}/>
            <Instagram style={{fontSize:'2rem'}}/>
            <Twitter style={{fontSize:'2rem'}}/>
            </IconsSection>
         <Styledfootercontent>All rights reserved</Styledfootercontent>
        </Styledfooter>
    )
}

const Styledfooter=styled.div`
height: 50vh;
width: 100%;
position: relative;
  background-image: 
    url(${wave});
    background-repeat: no-repeat;
    background-size: contain;
  
`
const IconsSection=styled.div`
position:absolute;
bottom:4rem;
right:1rem;
z-index:2;
color: white;
font-size: 2rem;
`
const Styledfootercontent=styled.div`
position: absolute;
right: 45vw;
bottom: 4rem;
z-index: 2;
color: white;
`
export default Footer
 