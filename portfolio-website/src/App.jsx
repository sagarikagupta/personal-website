import { useState } from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ReactParticles from './components/ReactParticles'


function App() {

  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <ReactParticles />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Main />
      </div>
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
      
    </div>
  );

}

export default App
