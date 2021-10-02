import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <EdutcationContainer>
      <h1>Edutcation</h1>
      <TimeLineEducation>
        <EducationCard
          id={1}
          degree="Master Degree"
          year={2019}
          desc="Master Degree Of Computer Engineering Artificial intelligence. University Of Aleppo - Electrical And
Electronic Engineering Faculty – Computer
Engineering"
        />
        <EducationCard
          id={2}
          degree="Bachelor's Degree"
          year={2014}
          desc="Bachelor's Degree In Computer Engineering. University Of Aleppo - Electrical And
Electronic Engineering Faculty – Computer
Engineering"
        />
      </TimeLineEducation>
    </EdutcationContainer>
  );
}

const EdutcationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
`;
const TimeLineEducation = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem;
  @media (max-width: 800px) {
    display: block;
  }
`;
export default Education;
