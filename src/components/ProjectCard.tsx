import styled  from 'styled-components'
import React, { Component, FC, useState } from 'react'

import { Grid } from '@material-ui/core';
enum ProjectType{FrontEnd="FrontEnd",Backend="Backend"};
interface Iprops{
image:string
title:string
desc:string 
type:ProjectType

}
const ProjectCard:FC<Iprops> = ({image,title,desc,type}) => {
    const StyledCardPicture=styled.div`
    background-image: linear-gradient(to right bottom,
                  #064730,
                  #23d997), url(${image});
                  height: 15rem;
      background-size: cover;
      background-blend-mode: screen;
      clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
      overflow: hidden;
  `;
    return (
        <ProjectCardcontainer>
            <StyledCardPicture></StyledCardPicture>
            <StledProjectCardTitle>
          <span >
          {title}
          </span>
        </StledProjectCardTitle>
        <ProjectDetails>
          <h5> {type} </h5>
          <p>{desc}</p>
      
      
          </ProjectDetails>
        </ProjectCardcontainer>
    )
}

const ProjectCardcontainer=styled.div`
width: 100%;
 height: 35rem;
background-color: red;
position: relative;
overflow: hidden;
box-shadow: 0 1.5rem 4rem rgba($color: #000000, $alpha: 0.2);
 border-radius:4px;
`

const StledProjectCardTitle=styled.h4`
    font-size: 2rem;
    font-weight: 200  ;
    text-transform: uppercase;
    text-align: right;
    
    position: absolute;
    top: 10rem;
    right: 2rem;
    width: 60%;
   span{
      padding: 1rem 1rem;
      box-decoration-break: clone;
      color: white;
        background-image: linear-gradient(
          to right bottom,
          #064730,
            #23d997
        );
    
    }
 
`;
const ProjectDetails=styled.div`
display:flex;
flex-direction: column;
justify-content: center;
`
export default ProjectCard
