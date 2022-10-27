import About from './components/About'
import Contact from './components/Contact'
import Main from './components/Main'
import Project1 from './components/Project1'
import Project2 from './components/Project2'
import Skills from './components/Skills'
import './App.css';
import { createRef } from 'react'



function App() {
  const contactRef = createRef()
  const skillsRef = createRef()
  const projectRef = createRef()
  const aboutRef = createRef()

  const refObj = {
    contactRef,
    skillsRef,
    projectRef,
    aboutRef
  }

  return (
    <div className='App'>
        <Main refObj={refObj}/>
        <Skills ref={skillsRef}/>
        <Project1 ref={projectRef}/>
        <Project2 />
        <About ref={aboutRef}/>
        <Contact ref={contactRef}/>
    </div>
  )
}

export default App;
