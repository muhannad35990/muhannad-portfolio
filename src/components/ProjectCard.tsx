import styled from "styled-components";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Grid } from "@material-ui/core";
import ReactImg from "../images/skills/react.png";
enum ProjectType {
  FrontEnd = "FrontEnd",
  Backend = "Backend",
  FullStack = "FullStack",
}
interface Iprops {
  id: number;
  image: string;
  title: string;
  desc: string;
  type: ProjectType;
  tools: string[];
  icons: string[];
}
const ProjectCard: FC<Iprops> = ({
  id,
  image,
  title,
  desc,
  type,
  tools,
  icons,
}) => {
  const StyledCardPicture = styled.div`
    background-image: linear-gradient(to right bottom, #064730, #23d997),
      url(${image});
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
        <span>{title}</span>
      </StledProjectCardTitle>
      <StyledCardContent>
        <ProjectDetails>
          <h5> {type} </h5>
          <p>{desc}</p>
        </ProjectDetails>

        <ToolsContainer>
          <Grid container spacing={2}>
            {tools.map((tool, index) => {
              return (
                index < 4 && (
                  <Grid item xs={3}>
                    <img
                      src={icons[index]}
                      alt="logo"
                      style={{ width: "25px", height: "20px" }}
                    />
                    <p>{tool}</p>
                  </Grid>
                )
              );
            })}
          </Grid>
        </ToolsContainer>
      </StyledCardContent>
      <Divider />
      <StyledButton>
        <Link to={`/projects/${id}`}>Details</Link>
      </StyledButton>
    </ProjectCardcontainer>
  );
};

const ProjectCardcontainer = styled.div`
  width: 20rem;
  height: 32rem;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba($color: #000000, $alpha: 0.2);
  border-radius: 4px;
`;

const StyledButton = styled.div`
  margin: 1rem;
  a {
    border: none;
    outline: none;
    padding: 0.5rem;
    font-weight: lighter;
    background-color: #0a6d4a;
    color: white;
    text-align: center;
    text-decoration: none;

    &:hover {
      background-color: white;
      border: 1px solid #0a6d4a;
      color: #0a6d4a;
      cursor: pointer;
    }
  }
`;
const ToolsContainer = styled.div`
  text-align: center;
  margin: 1rem 0.5rem;
  p {
    font-size: 0.8rem;
  }
`;
const StledProjectCardTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 200;
  text-transform: uppercase;
  text-align: right;
  position: absolute;
  top: 10rem;
  right: 1rem;
  width: 60%;
  span {
    padding: 0.3rem 1rem;
    box-decoration-break: clone;
    color: white;
    background-image: linear-gradient(to right bottom, #064730, #23d997);
  }
`;
const StyledCardContent = styled.div`
  height: 11.5rem;
`;
const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  h5 {
    font-size: 1.5rem;
    color: #fe8800;
  }
  p {
    margin-top: 0.5rem;
    color: #d1caca;
  }
`;
export default ProjectCard;
