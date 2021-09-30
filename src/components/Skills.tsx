import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import * as images from "./ImagesImports";
import SkillwithRatingBar from "./SkillwithRatingBar";
import { skillsData } from "../Data/skillsData";
const Skills = () => {
  return (
    <StyledSkills>
      <h1>Skills</h1>
      <div style={{ margin: "0 3rem" }}>
        <Grid container>
          {skillsData.map((skill) => (
            <Grid item xs={2}>
              <SkillwithRatingBar
                name={skill.name}
                rate={skill.rate}
                img={skill.img}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </StyledSkills>
  );
};
const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Skills;
