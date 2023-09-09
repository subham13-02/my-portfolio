// src/App.js

import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills'; // Import the Skills component
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills /> {/* Include the Skills component */}
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
