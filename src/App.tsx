import React from 'react';
import './App.css';
import Education from './components/Education';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <NavBar/>
     <Header/>
     <Education/>
    </div>
  );
}

export default App;
