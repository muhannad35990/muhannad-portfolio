import React, { useEffect } from "react";
import "./App.css";
import GlobalStyle from "./components/GlobalStyle";
import { Switch, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Main from "./Pages/Main";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import styled from "styled-components";
import ProjectDetails from "./Pages/ProjectDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  let location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <AppContainer>
      <GlobalStyle />
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/projects/:id">
            <ProjectDetails />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export default App;
