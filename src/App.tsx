import React from 'react';
import './App.css';
import Education from './components/Education';
import Experiance from './components/Experiance';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <NavBar/>
     <Header/>
     <Education/>
     <Experiance/>
     <Skills/>
    </div>
  );
}

export default App;
