import React from 'react';
import './App.css';
import Education from './components/Education';
import Experiance from './components/Experiance';
import Footer from './components/Footer';
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
     <Footer/>
    </div>
  );
}

export default App;
