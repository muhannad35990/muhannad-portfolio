import  styled  from 'styled-components'
import React from 'react'
import ProjectCard from './ProjectCard'
import { Grid } from '@material-ui/core'
import project1 from '../images/laptop.jpg';
import reactImg from "../images/skills/react.png";
import htmlimg from "../images/skills/html.png";
import cssimg from "../images/skills/css.png";
import sassImg from "../images/skills/sass.png";
import bootstrapImg from "../images/skills/bootstrap-4.svg";
import dockerImg from "../images/skills/docker.png";
import firebaseImg from "../images/skills/firebase.png";
import formikImg from "../images/skills/formik.png";
import gitImg from "../images/skills/git.png";
import javascriptImg from "../images/skills/javascript.png";
import jiraImg from "../images/skills/jira.png";
import mongoImg from "../images/skills/mongo.png";
import nodeImg from "../images/skills/node.png";
import oauthImg from "../images/skills/oauth.png";
import reduxsagaImg from "../images/skills/redux-saga.png";
import reduxImg from "../images/skills/redux.png";
import sqlImg from "../images/skills/sql.png";
import stripeImg from "../images/skills/stripe.png";
import styledComponentsImg from "../images/skills/styledComponents.png";
import typescriptImg from "../images/skills/typescript.png";
import antImg from "../images/skills/ant.png";
import materialuiImg from "../images/skills/material-ui.svg";
import tailwindImg from "../images/skills/tailwind.png";
const Projects = () => {
    enum ProjectType{FrontEnd="FrontEnd",Backend="Backend"};
    return (
        <StyledProjectsContainer>
             <Grid container spacing={5}>
                 <Grid item xs={3}>
                 <ProjectCard image={project1} title="Natural Tours Booking" desc="The Front End part of Booking Tours online project" type={ProjectType.FrontEnd} tools={["React","Redux","Redux-saga","SCSS"]} icons={[reactImg,reduxImg,reduxsagaImg,sassImg]}/>
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
