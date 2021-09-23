import React from 'react'
import styled from 'styled-components'
import Rating from '@mui/material/Rating';
interface skills{
    name:string
    rate:number
    img:string
}
const SkillwithRatingBar:React.FC<skills> = ({name,rate,img}) => {
    return (
        <Skill>
            <img src={img} alt="logo" style={{width:'50px'}}/>
       <h4 style={{margin:'0 1rem 0 1rem'}}>{name}</h4>    
      <Rating name="read-only" value={rate} readOnly />
        </Skill>
    )
}
const Skill=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin:1rem 0

`
export default SkillwithRatingBar
