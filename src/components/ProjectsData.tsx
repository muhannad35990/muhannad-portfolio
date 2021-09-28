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
import restImg from '../images/skills/rest.png';
import expressImg from  '../images/skills/express.svg';
import socketImg from '../images/skills/socket.svg';
import NaturalFrontImg from '../images/covers/naturalFront.jpeg';
import NaturalBackImg from '../images/covers/naturalBack.jpeg';
import realEstateImg from '../images/covers/realEstate.jpeg';
import touristsImg from '../images/covers/tourists.jpg';
import hotelsImg from '../images/covers/hotels.jpg';
import whatsappImg from '../images/covers/whatsapp.jpg';
import chatImg from '../images/covers/chat.png';
import videochatImg from '../images/covers/videoChat.jpg';
import muhannadImg from '../images/covers/muhannad.jpg';

enum ProjectType{FrontEnd="FrontEnd",Backend="Backend",FullStack="FullStack"};

export  const  ProjectsData=[
{
    image:NaturalFrontImg,
    title:"Natural Tours ",
    desc:"The Front End part of Booking Tours online project." ,
    type:ProjectType.FrontEnd,
    tools:["ReactJs","Redux","Saga","SCSS"],
    icons:[reactImg,reduxImg,reduxsagaImg,sassImg],
},
{
    image:NaturalBackImg,
    title:"Natural Tours ",
    desc:"The Back End part of Booking Tours online project." ,
    type:ProjectType.Backend,
    tools:["NodeJs","Express","MongoDB","REST"],
    icons:[nodeImg,expressImg,mongoImg,restImg]
},
{
    image:realEstateImg,
    title:"Real estate site",
    desc:"This is a landing page for real-estate and realtors." ,
    type:ProjectType.FrontEnd,
    tools:["ReactJs","JAVASCRIPT","MUI","SCSS"],
    icons:[reactImg,javascriptImg,materialuiImg,sassImg],
},
{
    image:touristsImg,
    title:"Tourists site",
    desc:"This is a landing page for tours and Tourists. " ,
    type:ProjectType.FrontEnd,
    tools:["ReactJs","JAVASCRIPT","MUI","SCSS"],
    icons:[reactImg,javascriptImg,materialuiImg,sassImg]
},
{
    image:hotelsImg,
    title:"Hotels booking",
    desc:"This is a landing page for hotels booking." ,
    type:ProjectType.FrontEnd,
    tools:["ReactJs","JAVASCRIPT","MUI","SCSS"],
    icons:[reactImg,javascriptImg,materialuiImg,sassImg]
},
{
    image:whatsappImg,
    title:"Whatsapp web clone",
    desc:"This is a Clone of whatsapp web application. " ,
    type:ProjectType.FullStack,
    tools:["ReactJs","Firebase","MUI","CSS"],
    icons:[reactImg,firebaseImg,materialuiImg,cssimg]
}
,
{
    image:videochatImg,
    title:"Video audio chat",
    desc:"This is a video audioweb chat application." ,
    type:ProjectType.FullStack,
    tools:["NodeJs","Express","socket.io","CSS"],
    icons:[nodeImg,expressImg,socketImg,cssimg]
},
{
    image:chatImg,
    title:"chat Application",
    desc:"This is a full stack local messenger using local storage." ,
    type:ProjectType.FullStack,
    tools:["ReactJs","NodeJs","socket.io","Bootstrap"],
    icons:[reactImg,nodeImg,socketImg,bootstrapImg]
},
{
    image:muhannadImg,
    title:"Muhannad portfolio",
    desc:"This project of my protfolio" ,
    type:ProjectType.FrontEnd,
    tools:["ReactJs","Styled-components","Typescript","MUI"],
    icons:[reactImg,styledComponentsImg,typescriptImg,materialuiImg]
}
]

