import React from 'react';
import './App.css';
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Main from './Pages/Main';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import  styled  from 'styled-components';
import ProjectDetails from './Pages/ProjectDetails';

function App() {
  return (
    <div  >
      <GlobalStyle/>
      <Router>
        <AppContainer>
               <NavBar/>
              <Switch>
                <Route  exact path="/contact">
                  <Contact/>
                </Route>
                <Route exact path="/projects">
                  <Projects/>
                </Route>
                <Route exact path="/projects/:id">
                  <ProjectDetails/>
                </Route>
                <Route path="/">
                <Main/>
                </Route>
              </Switch>
              <Footer/>  
              </AppContainer>
            </Router>
    </div>
  );
}

const AppContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
 

`
export default App;
