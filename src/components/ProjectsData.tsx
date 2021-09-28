import * as images from './ImagesImports'
enum ProjectType {
  FrontEnd = "FrontEnd",
  Backend = "Backend",
  FullStack = "FullStack",
}

export const ProjectsData = [
  {
    id: 0,
    image: images.NaturalFrontImg,
    title: "Natural Tours ",
    desc: "The Front End part of Booking Tours online project.",
    type: ProjectType.FrontEnd,
    tools: ["ReactJs", "Redux", "Saga", "SCSS"],
    icons: [images.reactImg, images.reduxImg, images.reduxsagaImg, images.sassImg],
    images:[images.NtoursImg1,images.NtoursImg1,images.NtoursImg1,images.NtoursImg1]
  },
  {
    id: 1,
    image: images.NaturalBackImg,
    title: "Natural Tours ",
    desc: "The Back End part of Booking Tours online project.",
    type: ProjectType.Backend,
    tools: ["NodeJs", "Express", "MongoDB", "REST"],
    icons: [images.nodeImg, images.expressImg, images.mongoImg, images.restImg],
    images:[images.NtoursImg1,images.NtoursImg1,images.NtoursImg1,images.NtoursImg1]
  },
  {
    id:2,
    image: images.realEstateImg,
    title: "Real estate site",
    desc: "This is a landing page for real-estate and realtors.",
    type: ProjectType.FrontEnd,
    tools: ["ReactJs", "JAVASCRIPT", "MUI", "SCSS"],
    icons: [images.reactImg, images.javascriptImg, images.materialuiImg, images.sassImg],
    images:[images.NtoursImg1,images.NtoursImg1,images.NtoursImg1,images.NtoursImg1]
  },
  {
    id: 3,
    image: images.touristsImg,
    title: "Tourists site",
    desc: "This is a landing page for tours and Tourists. ",
    type: ProjectType.FrontEnd,
    tools: ["ReactJs", "JAVASCRIPT", "MUI", "SCSS"],
    icons: [images.reactImg, images.javascriptImg, images.materialuiImg, images.sassImg],
    images:[images.NtoursImg1,images.NtoursImg1,images.NtoursImg1,images.NtoursImg1]
  },
  {
    id: 4,
    image: images.hotelsImg,
    title: "Hotels booking",
    desc: "This is a landing page for hotels booking.",
    type: ProjectType.FrontEnd,
    tools: ["ReactJs", "JAVASCRIPT", "MUI", "SCSS"],
    icons: [images.reactImg, images.javascriptImg, images.materialuiImg, images.sassImg],
    images:[images.NtoursImg1,images.NtoursImg1,images.NtoursImg1,images.NtoursImg1]
  },
  {
    id: 5,
    image: images.whatsappImg,
    title: "Whatsapp web clone",
    desc: "This is a Clone of whatsapp web application. ",
    type: ProjectType.FullStack,
    tools: ["ReactJs", "Firebase", "MUI", "CSS"],
    icons: [images.reactImg, images.firebaseImg, images.materialuiImg, images.cssimg],
    images:[images.NtoursImg1,images.NtoursImg1,images.NtoursImg1,images.NtoursImg1]
  },
  {
    id: 6,
    image: images.videochatImg,
    title: "Video audio chat",
    desc: "This is a video audioweb chat application.",
    type: ProjectType.FullStack,
    tools: ["NodeJs", "Express", "socket.io", "CSS"],
    icons: [images.nodeImg, images.expressImg, images.socketImg, images.cssimg],
    images:[images.NtoursImg1,images.NtoursImg1,images.NtoursImg1,images.NtoursImg1]
  },
  {
    id:7,
    image: images.chatImg,
    title: "chat Application",
    desc: "This is a full stack local messenger using local storage.",
    type: ProjectType.FullStack,
    tools: ["ReactJs", "NodeJs", "socket.io", "Bootstrap"],
    icons: [images.reactImg, images.nodeImg, images.socketImg, images.bootstrapImg],
    images:[images.NtoursImg1,images.NtoursImg1,images.NtoursImg1,images.NtoursImg1]
  },
  {
    id: 8,
    image: images.muhannadImg,
    title: "Muhannad portfolio",
    desc: "This project of my protfolio",
    type: ProjectType.FrontEnd,
    tools: ["ReactJs", "Styled-components", "Typescript", "MUI"],
    icons: [images.reactImg, images.styledComponentsImg, images.typescriptImg, images.materialuiImg],
    images:[images.NtoursImg1,images.NtoursImg1,images.NtoursImg1,images.NtoursImg1]
  },
];
