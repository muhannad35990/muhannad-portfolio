 import  styled  from 'styled-components'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { StayPrimaryLandscapeRounded } from '@material-ui/icons';
 function Experiance() {
     return (
         <ExperianceContainer>
             <h1>Experience</h1>
             <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    date="2020 - present"
    iconStyle={{ background: '#23d997', color: '#fff' }}
    icon={<StayPrimaryLandscapeRounded />}
  >
    <h3 className="vertical-timeline-element-title" style={{color:'#23d997'}}>Front-End web Developer</h3>
    <p style={{ margin:'0 0 1rem 0'}}> <a href="www.salvimar.de"  >  SALVIMAR Gmbh,Germany </a></p>
    <div>
        <p style={{color:'#333',margin:0}}>&#x25cf; Frontend web developer using React.js.</p>
        <p style={{color:'#333',margin:0}}>&#x25cf; Convert designs / wireframes into responsive reusable components.</p>
        <p style={{color:'#333',margin:0}}>&#x25cf; Use additional libraries such as Redux to manage the web application’s
state, and make asynchronous API calls.</p>
        <p style={{color:'#333',margin:0}}>&#x25cf; Write clean and maintainable code.</p>
        <p style={{color:'#333',margin:0}}>&#x25cf; Fixing bugs of existing applications.</p>
        <p style={{color:'#333',margin:0}}>&#x25cf; Adding new features to existing applications.</p>
        <p style={{color:'#333',margin:0}}>&#x25cf; Working on Agile environment.</p>
        <p style={{color:'#333',margin:0}}>&#x25cf; Collaborate with a team of developers and designers to create a web
application.</p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - 2020"
    iconStyle={{ background: '#FE8800', color: '#fff' }}
    icon={<StayPrimaryLandscapeRounded />}
  >
    <h3 className="vertical-timeline-element-title" style={{color:'#23d997'}}>Freelancer</h3>
    
    <p style={{color:'#333'}}>
     A React.js developer freelancer
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StayPrimaryLandscapeRounded />}
  />
</VerticalTimeline>
         </ExperianceContainer>
     )
 }
 
 const ExperianceContainer=styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
  background-color: #1b1b1b;
 `

 export default Experiance

 