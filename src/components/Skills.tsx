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
import { Grid } from "@material-ui/core";
import styled from "styled-components";
const Skills = () => {
  return (
    <StyledSkills>
      <h1>Skills</h1>
      <div  style={{margin :"0 3rem"}}>
      <Grid container >
        <Grid item xs={2}>
          <SkillwithRatingBar name="HTML5" rate={99} img={htmlimg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="CSS3" rate={99} img={cssimg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="SASS" rate={99} img={sassImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Bootstrap" rate={95} img={bootstrapImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Tailwind" rate={95} img={tailwindImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Material-ui" rate={99} img={materialuiImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Ant design" rate={99} img={antImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="JAVASCRIPT" rate={99} img={javascriptImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="TypeScript" rate={99} img={typescriptImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="React.js" rate={99} img={reactImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Redux" rate={99} img={reduxImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="redux-saga" rate={99} img={reduxsagaImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar
            name=" Styled components"
            rate={99}
            img={styledComponentsImg}
          />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name=" Formik,Yup" rate={99} img={formikImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name=" Node.js" rate={80} img={nodeImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="MongoDB" rate={90} img={mongoImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="SQL" rate={90} img={sqlImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Git,GitHub" rate={99} img={gitImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Agile, JIRA" rate={99} img={jiraImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Firebase" rate={70} img={firebaseImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Docker" rate={70} img={dockerImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Oauth" rate={80} img={oauthImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Stripe" rate={70} img={stripeImg} />
        </Grid>
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
