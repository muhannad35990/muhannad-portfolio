import * as images from "../components/ImagesImports"
enum ProjectType {
  FrontEnd = "FrontEnd",
  Backend = "Backend",
  FullStack = "FullStack"
}

export const projectsData = [
  {
    id: 0,
    image: images.acquire1,
    title: "Acquire.fi",
    desc: "The first online marketplace dedicated solely to cryptocurrency businesses",
    type: ProjectType.FrontEnd,
    tools: [
      "NextJs",
      "Web3.js",
      "Context api",
      "Mui",
      "Styled components",
      "Axios",
      "Formik",
      "Yup",
      "MapBox",
      "OAuth",
      "PassportJs",
      "chart.js",
      "Eslint",
      "Atomic design"
    ],
    icons: [
      images.nextImg,
      images.web3,
      images.reduxsagaImg,
      images.reactImg,
      images.styledComponentsImg,
      images.axiosImg,
      images.formikImg,
      images.noLogoImg,
      images.oauthImg,
      images.passportImg,
      images.chartImg,
      images.eslintImg
    ],
    images: [
      images.acquire1,
      images.acquire2,
      images.acquire3,
      images.acquire4,
      images.acquire5,
      images.acquire6,
      images.acquire7
    ],
    features: [
      "MArketplace to sell",
      "Pools to invest ",
      "Dashboard for managment",
      "Alot of other features"
    ],

    demo: "https://app.acquire.fi"
  },
  {
    id: 1,
    image: images.spobis1,
    title: "Home of Sports Business",
    desc: "SPOBIS is Europe's largest sports business event.",
    type: ProjectType.FrontEnd,
    tools: [
      "NextJs",
      "Context api",
      "Mui",
      "Styled components",
      "Axios",
      "Formik",
      "Yup",
      "MapBox",
      "OAuth",
      "PassportJs",
      "chart.js",
      "Eslint"
    ],
    icons: [
      images.nextImg,
      images.reduxsagaImg,
      images.reactImg,
      images.styledComponentsImg,
      images.axiosImg,
      images.formikImg,
      images.noLogoImg,
      images.oauthImg,
      images.passportImg,
      images.chartImg,
      images.eslintImg
    ],
    images: [
      images.spobis1,
      images.spobis2,
      images.spobis3,
      images.spobis4,
      images.spobis5,
      images.spobis6
    ],
    features: [
      "Home of sports business",
      "using contentful to read data",
      "Many features"
    ],

    demo: "https://spobis.com"
  },
  {
    id: 2,
    image: images.astroverse1,
    title: "Astroverse",
    desc: "Astroverse is a Metaverse solutions company. ",
    type: ProjectType.FrontEnd,
    tools: [
      "NextJs",
      "Context api",
      "Mui",
      "Styled components",
      "Axios",
      "Formik",
      "Yup",
      "MapBox",
      "OAuth",
      "PassportJs",
      "chart.js",
      "Eslint",
      "Atomic design"
    ],
    icons: [
      images.nextImg,
      images.reduxsagaImg,
      images.reactImg,
      images.styledComponentsImg,
      images.axiosImg,
      images.formikImg,
      images.noLogoImg,
      images.oauthImg,
      images.passportImg,
      images.chartImg,
      images.eslintImg
    ],
    images: [images.astroverse1, images.astroverse2, images.astroverse3],
    features: ["Astroverse company", "Many features"],

    demo: "https://astroverse.solutions/"
  },
  {
    id: 3,
    image: images.lebanonِِِِAgriculture1,
    title: "Lebanon agriculture ministry",
    desc: "The electronic platform for food safety Norms and requirements",
    type: ProjectType.FrontEnd,
    tools: [
      "NextJs",
      "Context api",
      "Mui",
      "Styled components",
      "Axios",
      "Formik",
      "Yup",
      "MapBox",
      "OAuth",
      "PassportJs",
      "chart.js",
      "Eslint",
      "Atomic design",
      "I18next"
    ],
    icons: [
      images.nextImg,
      images.reduxsagaImg,
      images.reactImg,
      images.styledComponentsImg,
      images.axiosImg,
      images.formikImg,
      images.noLogoImg,
      images.oauthImg,
      images.passportImg,
      images.chartImg,
      images.eslintImg,
      images.noLogoImg,
      images.i18nextImg
    ],
    images: [
      images.lebanonِِِِAgriculture1,
      images.lebanonِِِِAgriculture2,
      images.lebanonِِِِAgriculture3,
      images.lebanonِِِِAgriculture4
    ],
    features: [
      "Ministry of Agriculture's online platform on food safety norms and requirements. This tool is designed to facilitate access to up-to-date information on food safety regulations and import/export requirements for various stakeholders: farmers, producers, exporters, importers, laboratories, and consumers",
      "Many features"
    ],

    demo: "https://regulations.agriculture.gov.lb"
  },
  {
    id: 4,
    image: images.erp1,
    title: "ERP System",
    desc: "Full multi tanet ERP system ",
    type: ProjectType.FrontEnd,
    tools: [
      "ReactJs",
      "Redux",
      "Saga",
      "SCSS",
      "Axios",
      "Formik",
      "Yup",
      "Ant Design",
      "I18next",
      "MapBox",
      "Stripe",
      "OAuth",
      "PassportJs",
      "chart.js",
      "Eslint"
    ],
    icons: [
      images.reactImg,
      images.reduxImg,
      images.reduxsagaImg,
      images.sassImg,
      images.axiosImg,
      images.formikImg,
      images.noLogoImg,
      images.antImg,
      images.i18nextImg,
      images.mapboxImg,
      images.stripeImg,
      images.oauthImg,
      images.passportImg,
      images.chartImg,
      images.eslintImg
    ],
    images: [images.erp1, images.erp2, images.erp3],
    features: [
      "ERP system to manage payments and invoices and other stuff",
      "Many features"
    ],

    demo: "https://erp.cloudsystems.tech"
  },
  {
    id: 5,
    image: images.chaalan1,
    title: "Chaalan plast",
    desc: "The electronic platform for food safety Norms and requirements",
    type: ProjectType.FrontEnd,
    tools: [
      "NextJs",
      "Context api",
      "Mui",
      "Styled components",
      "Axios",
      "Formik",
      "Yup",
      "MapBox",
      "OAuth",
      "PassportJs",
      "chart.js",
      "Eslint",
      "Atomic design",
      "I18next"
    ],
    icons: [
      images.nextImg,
      images.reduxsagaImg,
      images.reactImg,
      images.styledComponentsImg,
      images.axiosImg,
      images.formikImg,
      images.noLogoImg,
      images.oauthImg,
      images.passportImg,
      images.chartImg,
      images.eslintImg,
      images.noLogoImg,
      images.i18nextImg
    ],
    images: [images.chaalan1, images.chaalan2, images.chaalan3],
    features: ["Sports clubs", "Many features"],

    demo: "https://chaalanplast.com/"
  },
  {
    id: 6,
    image: images.champs1,
    title: "Champs UAE",
    desc: "Sports club",
    type: ProjectType.FrontEnd,
    tools: [
      "NextJs",
      "Context api",
      "Mui",
      "Styled components",
      "Axios",
      "Formik",
      "Yup",
      "MapBox",
      "OAuth",
      "PassportJs",
      "chart.js",
      "Eslint",
      "Atomic design",
      "I18next"
    ],
    icons: [
      images.nextImg,
      images.reduxsagaImg,
      images.reactImg,
      images.styledComponentsImg,
      images.axiosImg,
      images.formikImg,
      images.noLogoImg,
      images.oauthImg,
      images.passportImg,
      images.chartImg,
      images.eslintImg,
      images.noLogoImg,
      images.i18nextImg
    ],
    images: [images.champs1, images.champs2, images.champs3],
    features: ["Site for retail", "Many features"],

    demo: "https://champs-sportsclub.com/"
  },
  {
    id: 7,
    image: images.yutopia1,
    title: "yutopia care",
    desc: "Centre of advanced medicine awaits you. Integrating the world's best labs with customized, elite treatments, Yutopia can transform your health to that of a superhuman.",
    type: ProjectType.FrontEnd,
    tools: ["webflow"],
    icons: [images.noLogoImg],
    images: [images.yutopia1, images.yutopia2, images.yutopia3],
    features: ["Site for advanced medicine", "Many features"],

    demo: "https://www.yutopia.care/"
  },
  {
    id: 8,
    image: images.NaturalFrontImg,
    title: "Natural Tours ",
    desc: "The Front End part of Booking Tours online project.",
    type: ProjectType.FrontEnd,
    tools: [
      "ReactJs",
      "Redux",
      "Saga",
      "SCSS",
      "Axios",
      "Formik",
      "Yup",
      "Ant Design",
      "I18next",
      "MapBox",
      "Stripe",
      "OAuth",
      "PassportJs",
      "chart.js",
      "Eslint"
    ],
    icons: [
      images.reactImg,
      images.reduxImg,
      images.reduxsagaImg,
      images.sassImg,
      images.axiosImg,
      images.formikImg,
      images.noLogoImg,
      images.antImg,
      images.i18nextImg,
      images.mapboxImg,
      images.stripeImg,
      images.oauthImg,
      images.passportImg,
      images.chartImg,
      images.eslintImg
    ],
    images: [
      images.NtoursImg1,
      images.Ntour1,
      images.Ntour2,
      images.Ntour3,
      images.Ntour4,
      images.Ntour5,
      images.Ntour6,
      images.Ntour7,
      images.Ntour7,
      images.Ntour9,
      images.Ntour10,
      images.Ntour11,
      images.Ntour12,
      images.Ntour13,
      images.Ntour14
    ],
    features: [
      "CRUD on tours, users, bookings, reviews",
      "Authentication using Jwt web tokens and refresh tokens.",
      "Change password and reset password using email.",
      "Uploading images and processing them.",
      "Credit Card Payments with Stripe.",
      "Login with facebook and gmail.",
      "Multi language"
    ],
    youtube: "https://www.youtube.com/embed/4VrSu75fmSE",
    demo: "https://natural-tours.netlify.app/",
    source: "https://github.com/muhannad35990/NatureTours-React.JS"
  },
  {
    id: 9,
    image: images.NaturalBackImg,
    title: "Natural Tours ",
    desc: "The Back End part of Booking Tours online project.",
    type: ProjectType.Backend,
    tools: [
      "NodeJs",
      "Express",
      "MongoDB",
      "REST",
      "JWT",
      "Stripe",
      "Oauth",
      "PassportJs",
      "heroku",
      "Webhooks",
      "Eslint"
    ],
    icons: [
      images.nodeImg,
      images.expressImg,
      images.mongoImg,
      images.restImg,
      images.jwtImg,
      images.stripeImg,
      images.oauthImg,
      images.passportImg,
      images.herokuImg,
      images.webhooksImg,
      images.eslintImg
    ],
    images: [images.NtoursImg1],
    features: [
      "CRUD on tours, users, bookings, reviews",
      "Authentication using Jwt web tokens and refresh tokens",
      "Change password and reset password using email",
      "Uploading images and processing them",
      "Credit Card Payments with Stripe",
      "Login with facebook and gmail",
      "Preventing Parameter Pollution in monogodb",
      "Data sanitization against NOSQL query injection and XSS",
      "Limiting number of requests to the backend from IP address by time to protect against DOS attack",
      "Compress all text sent to the client"
    ],
    source: "https://github.com/muhannad35990/NatureToursAPI"
  },
  {
    id: 10,
    image: images.realEstateImg,
    title: "Real estate site",
    desc: "This is a landing page for real-estate and realtors.",
    type: ProjectType.FrontEnd,
    tools: ["ReactJs", "JAVASCRIPT", "MUI", "SCSS"],
    icons: [
      images.reactImg,
      images.javascriptImg,
      images.materialuiImg,
      images.sassImg
    ],
    images: [
      images.Rstate1,
      images.Rstate2,
      images.Rstate3,
      images.Rstate4,
      images.Rstate5,
      images.Rstate6
    ],
    features: [
      "Landing page for real-estate and realtors",
      "Different section for different features",
      "Cool animation",
      "responsive design"
    ],
    source: "https://github.com/muhannad35990/real-estate ",
    demo: "https://competent-knuth-1aab9a.netlify.app/"
  },
  {
    id: 11,
    image: images.touristsImg,
    title: "Tourists site",
    desc: "This is a landing page for tours and Tourists. ",
    type: ProjectType.FrontEnd,
    tools: ["ReactJs", "JAVASCRIPT", "MUI", "SCSS"],
    icons: [
      images.reactImg,
      images.javascriptImg,
      images.materialuiImg,
      images.sassImg
    ],
    images: [
      images.Toursit1,
      images.Toursit2,
      images.Toursit3,
      images.Toursit4,
      images.Toursit5,
      images.Toursit6,
      images.Toursit7,
      images.Toursit8
    ],
    features: [
      "Landing page for Tourists site",
      "Different section for different features",
      "Cool animation",
      "responsive design"
    ],
    source: "https://github.com/muhannad35990/TouristSite",
    demo: "https://silly-jones-4fbb74.netlify.app/"
  },
  {
    id: 12,
    image: images.hotelsImg,
    title: "Hotels booking",
    desc: "This is a landing page for hotels booking.",
    type: ProjectType.FrontEnd,
    tools: ["ReactJs", "JAVASCRIPT", "MUI", "SCSS"],
    icons: [
      images.reactImg,
      images.javascriptImg,
      images.materialuiImg,
      images.sassImg
    ],
    images: [images.Hotel1, images.Hotel2, images.Hotel3],
    features: [
      "Landing page for Hotel site",
      "Different section for different features",
      "Cool animation",
      "responsive design"
    ],
    source: "https://github.com/muhannad35990/hotelsBook",
    demo: "https://gallant-heisenberg-00eac7.netlify.app/"
  },
  {
    id: 13,
    image: images.whatsappImg,
    title: "Whatsapp web clone",
    desc: "This is a Clone of whatsapp web application. ",
    type: ProjectType.FullStack,
    tools: ["ReactJs", "Firebase", "MUI", "CSS"],
    icons: [
      images.reactImg,
      images.firebaseImg,
      images.materialuiImg,
      images.cssimg
    ],
    images: [images.Whatsapp1, images.Whatsapp2],
    features: [
      "Fully working whatsapp web clone",
      "Group chat messaging",
      "Firebase for the Backend",
      "Login with gmail"
    ],
    source: "https://github.com/muhannad35990/whatsapp-webClone",
    demo: "https://whatsappweb-clone-6b5b8.web.app/"
  },
  {
    id: 14,
    image: images.videochatImg,
    title: "Video audio chat",
    desc: "This is a video audioweb chat application.",
    type: ProjectType.FullStack,
    tools: ["NodeJs", "Express", "socket.io", "CSS"],
    icons: [images.nodeImg, images.expressImg, images.socketImg, images.cssimg],
    images: [images.videochat1],
    features: [
      "Video audio chat",
      "Group chat ",
      "Allow joining to the meeting "
    ],
    source: "https://github.com/muhannad35990/video-audio-chat-nodejs",
    demo: "https://meeting-video-chat.herokuapp.com/"
  },
  {
    id: 15,
    image: images.chatImg,
    title: "chat Application",
    desc: "This is a full stack local messenger using local storage.",
    type: ProjectType.FullStack,
    tools: ["ReactJs", "NodeJs", "socket.io", "Bootstrap", "Express.js"],
    icons: [
      images.reactImg,
      images.nodeImg,
      images.socketImg,
      images.bootstrapImg,
      images.expressImg
    ],
    images: [
      images.Messenger1,
      images.Messenger2,
      images.Messenger3,
      images.Messenger4,
      images.Messenger5,
      images.Messenger6
    ],
    features: [
      "Local Group chat",
      "Using Local Storage to save data",
      "using socket.io in the server and the client",
      "Add contacts",
      "Add conversations",
      "Login with id or create new id"
    ],
    source: "https://github.com/muhannad35990/Messenger_FullStack"
  },
  {
    id: 16,
    image: images.muhannadImg,
    title: "Muhannad portfolio",
    desc: "This project of my protfolio",
    type: ProjectType.FrontEnd,
    tools: ["ReactJs", "Styled-components", "Typescript", "MUI"],
    icons: [
      images.reactImg,
      images.styledComponentsImg,
      images.typescriptImg,
      images.materialuiImg
    ],
    images: [
      images.Portfolio1,
      images.Portfolio2,
      images.Portfolio3,
      images.Portfolio4,
      images.Portfolio5,
      images.Portfolio6,
      images.Portfolio7,
      images.Portfolio8,
      images.Portfolio9,
      images.Portfolio10,
      images.Portfolio11,
      images.Portfolio12
    ],
    features: [
      "Pages for main, projects and contact",
      "Different sections ",
      "Cool animation"
    ],
    source: "https://github.com/muhannad35990/muhannad-portfolio"
  }
]
