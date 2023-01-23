import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import SmallProjectContainer from "./components/containers/SmallProjectContainer";
import { createRef } from "react";
import "./index.css";

function App() {
  const contactRef = createRef();
  const projectRef = createRef();
  const aboutRef = createRef();

  const refObj = {
    contactRef,
    projectRef,
    aboutRef,
  };

  return (
    <div className="App">
      <Main refObj={refObj} />
      <Project1 ref={projectRef} />
      <Project2 />
      <SmallProjectContainer />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
