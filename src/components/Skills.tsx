import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import * as images from "./ImagesImports";
import SkillwithRatingBar from "./SkillwithRatingBar";
import { skillsData } from "../Data/skillsData";
import { createMuiTheme, ThemeProvider } from "@mui/material";

const Skills = () => {
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 800,
        md: 1200,
        lg: 1400,
        xl: 2100,
      },
    },
  });
  return (
    <StyledSkills>
      <h1>Skills</h1>
      <div style={{ margin: "0 3rem" }}>
        <ThemeProvider theme={theme}>
          <Grid container>
            {skillsData.map((skill) => (
              <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
                <SkillwithRatingBar
                  name={skill.name}
                  rate={skill.rate}
                  img={skill.img}
                />
              </Grid>
            ))}
          </Grid>
        </ThemeProvider>
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
