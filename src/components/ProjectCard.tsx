import styled  from 'styled-components'
import React, {  FC, useState } from 'react'
import { Divider, Grid } from '@material-ui/core';
import ReactImg from '../images/skills/react.png'
enum ProjectType{FrontEnd="FrontEnd",Backend="Backend"};
interface Iprops{
image:string
title:string
desc:string 
type:ProjectType
tools:string[]
icons:string[]

}
const ProjectCard:FC<Iprops> = ({image,title,desc,type,tools,icons}) => {
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
          <span>
          {title}
          </span>
        </StledProjectCardTitle>
        <ProjectDetails>
          <h5> {type} </h5>
          <p>{desc}</p> 
         </ProjectDetails>
         
          <ToolsContainer>
          <Grid container spacing={2}>
            {tools.map((tool,index)=>{
              return  <Grid item xs={3}>
              <img src={icons[index]} alt="logo" style={{width:'25px',height:'20px'}}/>
              <p>{tool}</p>
              </Grid>
            })}
          </Grid>      
          </ToolsContainer>
          <Divider/>
          <StyledButton>Details</StyledButton>
        

        </ProjectCardcontainer>
    )
}

const ProjectCardcontainer=styled.div`
width: 100%;
 height: 32rem;
background-color: #fff;
position: relative;
overflow: hidden;
box-shadow: 0 1.5rem 4rem rgba($color: #000000, $alpha: 0.2);
border-radius:4px;
 
`
const StyledButton=styled.button`
border:none;
outline:none;
padding:.5rem;
background-color: #23d997;
color:white;
text-align: center;
margin: 1rem;
&:hover{
background-color: white;
border: 1px solid #23d997;
color:#23d997
}
`
 const ToolsContainer=styled.div`
text-align: center;
 margin:1.5rem;
 p{
   font-size: .8rem;
 }
 `
const StledProjectCardTitle=styled.h4`
    font-size: 1.5rem;
    font-weight: 200  ;
    text-transform: uppercase;
    text-align: right; 
    position: absolute;
    top: 10rem;
    right: 2rem;
    width: 70%;
   span{
      padding: .3rem 1rem;
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
margin:1rem;
h5{
  font-size: 1.5rem;
  color:#FE8800;
}
p{
  margin-top: .5rem;
  color: #d1caca;
}
`
export default ProjectCard
