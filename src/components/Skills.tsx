import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import * as images from './ImagesImports'
import SkillwithRatingBar from "./SkillwithRatingBar";
const Skills = () => {
  return (
    <StyledSkills>
      <h1>Skills</h1>
      <div  style={{margin :"0 3rem"}}>
      <Grid container >
        <Grid item xs={2}>
          <SkillwithRatingBar name="HTML5" rate={99} img={images.htmlimg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="CSS3" rate={99} img={images.cssimg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="SASS" rate={99} img={images.sassImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Bootstrap" rate={95} img={images.bootstrapImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Tailwind" rate={95} img={images.tailwindImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Material-ui" rate={99} img={images.materialuiImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Ant design" rate={99} img={images.antImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="JAVASCRIPT" rate={99} img={images.javascriptImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="TypeScript" rate={99} img={images.typescriptImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="React.js" rate={99} img={images.reactImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Redux" rate={99} img={images.reduxImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="redux-saga" rate={99} img={images.reduxsagaImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar
            name=" Styled components"
            rate={99}
            img={images.styledComponentsImg}
          />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name=" Formik,Yup" rate={99} img={images.formikImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name=" Node.js" rate={80} img={images.nodeImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="MongoDB" rate={90} img={images.mongoImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="SQL" rate={90} img={images.sqlImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Git,GitHub" rate={99} img={images.gitImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Agile, JIRA" rate={99} img={images.jiraImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Firebase" rate={70} img={images.firebaseImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Docker" rate={70} img={images.dockerImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Oauth" rate={80} img={images.oauthImg} />
        </Grid>
        <Grid item xs={2}>
          <SkillwithRatingBar name="Stripe" rate={70} img={images.stripeImg} />
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
