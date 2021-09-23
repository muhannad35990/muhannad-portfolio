import  styled  from "styled-components";
import React from "react";
import university from "../images/University_of_Aleppo_Logo.jpg";
function EducationCard({ degree, year, desc }) {
  return (
    <StyledCard>
      <div>
        <img src={university} alt="aleppo university" />
      </div>
      <CardContent>
        <StyledDegree>{degree}</StyledDegree>
        <StyledYear>{year}</StyledYear>
       <p>{desc}</p>
        
      </CardContent>
    </StyledCard>
  );
}
const StyledCard=styled.div`
 
padding: 4rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height: 25rem;
width: 18rem;
margin: 0rem 2rem;
background-color: #fff;
box-shadow: 2 4rem 6rem rgba($color: #000000, $alpha: 0.9);
border: 1px solid #ccc;
border-radius: 20px;
&:hover{
    box-shadow: 0 3rem 6rem rgba($color: #000000, $alpha: 0.9);
}
`
const CardContent=styled.div`
padding: 0 1rem;
margin-top: 1rem;
 
`
const StyledYear=styled.div`
margin-bottom:1rem;
color: #23d997;
font-weight: bold;
`
const StyledDegree=styled.h4`
    font-weight: bolder;
    color: #FE8800;
    font-size: 1.3rem;
`

export default EducationCard;
