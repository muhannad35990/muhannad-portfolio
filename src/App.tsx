import React from 'react';
import './App.css';
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Contact from './components/Contact';
import Projects from './components/Projects';
import  styled  from 'styled-components';

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
