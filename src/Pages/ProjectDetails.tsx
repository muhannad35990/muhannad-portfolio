import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { ProjectsData } from "../components/ProjectsData";
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
        {ProjectsData[routeParams.id].images.map((img) => (
          <div>
            <img
              src={img}
              alt=""
              style={{ height: "80vh", width: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </ProjectDetailsContainer>
  );
};

const ProjectDetailsContainer = styled.div`
  margin: 4rem 0rem;

  min-height: 50vh;
`;
export default ProjectDetails;
