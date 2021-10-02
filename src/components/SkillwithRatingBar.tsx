import React from "react";
import styled from "styled-components";
import { LinearProgress, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
interface skills {
  name: string;
  rate: number;
  img: string;
}
const SkillwithRatingBar: React.FC<skills> = ({ name, rate, img }) => {
  return (
    <Skill data-aos="zoom-in" data-aos-delay="200">
      <img src={img} alt="logo" style={{ width: "35px", height: "30px" }} />
      <Box sx={{ width: "100%", ml: 2, mr: 4 }}>
        <h4 style={{ margin: "0 1rem 0 1rem", color: "#777" }}>{name}</h4>

        <LinearProgress variant="determinate" color="warning" value={rate} />
        <span>{`${Math.round(rate)}%`}</span>
      </Box>
    </Skill>
  );
};
const Skill = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;
export default SkillwithRatingBar;
