import styled from "styled-components";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Grid } from "@material-ui/core";
import project1 from "../images/general/laptop.jpg";
import { projectsData } from "../Data/ProjectsData";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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
const Projects = () => {
  return (
    <StyledProjectsContainer>
      <ThemeProvider theme={theme}>
        <Grid container spacing={5}>
          {projectsData.map((project) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <ProjectCard
                  id={project.id}
                  image={project.image}
                  title={project.title}
                  desc={project.desc}
                  type={project.type}
                  tools={project.tools}
                  icons={project.icons}
                />
              </Grid>
            );
          })}
        </Grid>
      </ThemeProvider>
    </StyledProjectsContainer>
  );
};
const StyledProjectsContainer = styled.div`
  margin: 10rem 3rem;
  display: flex;
  justify-content: center;
`;
export default Projects;
