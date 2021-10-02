import styled from "styled-components";
import React from "react";
import university from "../images/general/University_of_Aleppo_Logo.png";

interface Iprops {
  degree: string;
  year: number;
  desc: string;
  id: number;
}
const EducationCard: React.FC<Iprops> = ({ id, degree, year, desc }) => {
  return (
    <StyledCard data-aos="fade-up" data-aos-delay={`${id * 200}`}>
      <div>
        <StyledLogoImg src={university} alt="aleppo university" />
      </div>
      <CardContent>
        <StyledDegree>{degree}</StyledDegree>
        <StyledYear>{year}</StyledYear>
        <p>{desc}</p>
      </CardContent>
    </StyledCard>
  );
};
const StyledLogoImg = styled.img`
  width: 80%;
  @media (max-width: 900px) {
    width: 60%;
  }
`;
const StyledCard = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 25rem;
  width: 18rem;
  margin: 2rem 2rem;
  background-color: #fff;
  box-shadow: 2rem 4rem 6rem rgba($color: #000000, $alpha: 0.2);
  border: 1px solid #ccc;
  border-radius: 20px;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 4rem 3rem 6rem rgba($color: #000000, $alpha: 0.2);
    background-color: #f5f5f5;
  }
`;
const CardContent = styled.div`
  padding: 0 1rem;
  margin-top: 1rem;
`;
const StyledYear = styled.div`
  margin-bottom: 1rem;
  color: #23d997;
  font-weight: bold;
`;
const StyledDegree = styled.h4`
  font-weight: bolder;
  color: #fe8800;
  font-size: 1.3rem;
`;

export default EducationCard;
