import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { projectsData } from "../components/ProjectsData";
import * as images from "../components/ImagesImports";

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
        <h1>Features</h1>
        {projectsData[routeParams.id].features.map((feature) => (
          <StyledFeature>{feature}</StyledFeature>
        ))}
      </StyledSection>
      <StyledSection>
      <h1>Tools</h1>
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
  width: 60%;
  margin: 0.5rem;
  border-radius: 5px;
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
export default ProjectDetails;
