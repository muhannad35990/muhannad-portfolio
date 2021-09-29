import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { projectsData } from "../components/ProjectsData";
import * as images from "../components/ImagesImports";
import { Divider, Grid } from "@material-ui/core";
import { Box, width } from "@material-ui/system";

const ProjectDetails = () => {
  const routeParams = useParams();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ProjectDetailsContainer>
      <Slider {...settings}>
        {projectsData[routeParams.id].images.map((img) => (
          <div>
            <StyledSliderImage src={img} />
          </div>
        ))}
      </Slider>
      <StyledSection>
        <Divider
          style={{ width: "100%", height: "100%", marginBottom: "3rem" }}
        >
          <h1>Features</h1>
        </Divider>
        {projectsData[routeParams.id].features.map((feature) => (
          <StyledFeature>{feature}</StyledFeature>
        ))}
      </StyledSection>
      <StyledSection style={{ backgroundColor: "#fff" }}>
        <Divider
          style={{ width: "100%", height: "100%", marginBottom: "3rem" }}
        >
          <h1> Tools</h1>
        </Divider>
        <Grid
          container
          spacing={4}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 5rem",
          }}
        >
          {projectsData[routeParams.id].tools.map((tool, index) => (
            <Grid item xs={2}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={projectsData[routeParams.id].icons[index]}
                  alt="logo"
                  style={{ width: "50px", height: "40px" }}
                />

                <h4 style={{ marginTop: ".5rem", color: "#777" }}>{tool}</h4>
              </div>
            </Grid>
          ))}
        </Grid>
      </StyledSection>
      {projectsData[routeParams.id].youtube && (
        <StyledSection>
          <Divider
            style={{ width: "100%", height: "100%", marginBottom: "3rem" }}
          >
            <h1> Demo Video</h1>
          </Divider>

          <iframe
            style={{ width: "800px", height: "500px" }}
            src={projectsData[routeParams.id].youtube}
            allow="autoplay; encrypted-media"
            title={projectsData[routeParams.id].title}
            allowFullScreen
          />
        </StyledSection>
      )}
      <StyledSection>
        <Divider
          style={{ width: "100%", height: "100%", marginBottom: "3rem" }}
        >
          <h1>Links</h1>
        </Divider>
        <div style={{ display: "flex" }}>
          <StyledSourceLink href={projectsData[routeParams.id].source}>
            <img
              src={images.githubImg}
              alt="logo"
              style={{ width: "9rem", height: "5rem", marginBottom: "1rem" }}
            />
            <h5>Source code</h5>
          </StyledSourceLink>
          {projectsData[routeParams.id].demo && (
            <StyledSourceLink href={projectsData[routeParams.id].demo}>
              <img
                src={projectsData[routeParams.id].image}
                alt="logo"
                style={{ width: "9rem", height: "5rem", marginBottom: "1rem" }}
              />
              <h5>Live Demo</h5>
            </StyledSourceLink>
          )}
        </div>
      </StyledSection>
    </ProjectDetailsContainer>
  );
};

const StyledSection = styled.section`
  margin-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledFeature = styled.h3`
  padding: 1rem;
  border: 1px solid #23d997;
  color: #777;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  width: 60%;
  margin: 0.5rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #23d997;
    color: #fff;
    cursor: pointer;
  }
`;
const ProjectDetailsContainer = styled.div`
  margin: 4rem 0rem;
  min-height: 50vh;
`;
const StyledSliderImage = styled.img`
  height: 80vh;
  width: 100%;
  object-fit: fill;
`;
const StyledSourceLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ccc;
  box-shadow: 1rem 2rem 4rem rgba(0, 0, 0, 0.3);
  text-decoration: none;
  color: #23d997;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  h5 {
    color: #777;
    font-family: cursive;
  }
`;
export default ProjectDetails;
