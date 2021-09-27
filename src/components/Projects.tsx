import  styled  from 'styled-components'
import React from 'react'
import ProjectCard from './ProjectCard'
import { Grid } from '@material-ui/core'
import project1 from '../images/laptop.jpg'
const Projects = () => {
    enum ProjectType{FrontEnd="FrontEnd",Backend="Backend"};
    return (
        <StyledProjectsContainer>
             <Grid container spacing={5}>
                 <Grid item xs={3}>
                 <ProjectCard image={project1} title="project 1" desc="this is description" type={ProjectType.FrontEnd}/>
                 </Grid>
              
             </Grid>
            
         
        </StyledProjectsContainer>
    )
}
const StyledProjectsContainer=styled.div`
margin: 10rem 3rem;
display: flex;
justify-content: center;
`;
export default Projects
