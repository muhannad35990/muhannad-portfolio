import React from "react";
import SkillwithRatingBar from "./SkillwithRatingBar";
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
import mongoImg from "../images/skills/mongo.svg";
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
import { Grid } from "@material-ui/core";
import styled from "styled-components";
const Skills = () => {
  return (
    <StyledSkills>
      <h1>Skills</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SkillwithRatingBar name="HTML5" rate={5} img={htmlimg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="CSS3" rate={5} img={cssimg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="SASS" rate={5} img={sassImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="Bootstrap" rate={4.5} img={bootstrapImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="Tailwind" rate={4.5} img={tailwindImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="Material-ui" rate={5} img={materialuiImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="Ant design" rate={5} img={antImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="TypeScript" rate={5} img={typescriptImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="React.js" rate={5} img={reactImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="Redux" rate={5} img={reduxImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="redux-saga" rate={5} img={reduxsagaImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar
            name=" Styled components"
            rate={5}
            img={styledComponentsImg}
          />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name=" Formik,Yup" rate={5} img={formikImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name=" Node.js" rate={4} img={nodeImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="MongoDB" rate={4.5} img={mongoImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="SQL" rate={5} img={sqlImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="Git,GitHub" rate={5} img={gitImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="Agile, JIRA" rate={5} img={jiraImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="Firebase" rate={3} img={firebaseImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="Docker" rate={3} img={dockerImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="Oauth" rate={4.5} img={oauthImg} />
        </Grid>
        <Grid item xs={4}>
          <SkillwithRatingBar name="Stripe" rate={4} img={stripeImg} />
        </Grid>
      </Grid>
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
