import { useState } from "react"
import html5 from '../assets/html5Icon.png'
import reduxIcon from '../assets/reduxIcon.png'
import reactIcon from '../assets/reactIcon.png'
import cssIcon from '../assets/cssIcon.png'
import jsIcon from '../assets/jsIcon.png'
import mapboxIcon from '../assets/mapbox-icon.png'
import vsIcon from '../assets/vscode.png'
import expressIcon from '../assets/expressIcon.png'
import mongoIcon from '../assets/mongodbIcon.png'
import nodeIcon from '../assets/nodeIcon.png'
import npmIcon from '../assets/npmIcon.png'
import apIcon from '../assets/restApi.png'
import gitIcon from '../assets/gitIcon.png'
import { forwardRef } from "react"




const Skills = forwardRef((props, ref) => {
  const [skills1Hover, setSkills1Hover] = useState(false)
  const [skills2Hover, setSkills2Hover] = useState(false)
  const [skills3Hover, setSkills3Hover] = useState(false)

  return (
    
      <div className="skills" ref={ref}>
        <div className="skillsContainer">
          <div 
            className="skillsDiv1"
            onMouseEnter={() => setSkills1Hover(true)}
            onMouseLeave={() => setSkills1Hover(false)}
          ></div>
          {skills1Hover === true && 
            <div className="iconContainer">
              <div>
                <h2 className="skillsH2">Front-End</h2>
              </div>
              <div className="icons1">
                <div className="badgeContainer">
                  <img 
                    src={html5} className="badge" 
                  />
                  <p>HTML5</p>
                </div>
                <div className="badgeContainer">
                  <img 
                    src={cssIcon} className="badge" 
                  />
                  <p>CSS3</p>
                </div>
                <div className="badgeContainer">
                  <img 
                    src={reactIcon} className="badge" 
                  />
                  <p>React</p>
                </div>
                <div className="badgeContainer">
                  <img 
                    src={reduxIcon} className="badge" 
                  />
                  <p>Redux</p>
                </div>
                <div className="badgeContainer">
                  <img 
                    src={jsIcon} className="badge" 
                  />
                  <p>JavaScript</p>
                </div>
                <div className="badgeContainer">
                  <img 
                    src={mapboxIcon} className="badge" 
                  />
                  <p>Mapbox</p>
                </div>
              </div>
          </div>
          }
        </div>
        <div className="skillsContainer" >
            <div 
              className="skillsDiv2"
              onMouseEnter={() => setSkills2Hover(true)}
              onMouseLeave={() => setSkills2Hover(false)}
            ></div>
            {skills2Hover === true && 
               <div className="iconContainer">
               <div>
                 <h2 className="skillsH2">Tools</h2>
               </div>
               <div className="icons1">
                 <div className="badgeContainer">
                   <img 
                     src={vsIcon} className="badge" 
                   />
                   <p>VS Code</p>
                 </div>
                 <div className="badgeContainer">
                   <img 
                     src={gitIcon} className="badge" 
                   />
                   <p>Git</p>
                 </div>
                 <div className="badgeContainer">
                   <img 
                     src={npmIcon} className="badge" 
                   />
                   <p>NPM</p>
                 </div>
                 </div>
                 </div>
            }
        </div>
        <div className="skillsContainer" >
            <div 
              className="skillsDiv3"
              onMouseEnter={() => setSkills3Hover(true)}
              onMouseLeave={() => setSkills3Hover(false)}
            ></div>
            {skills3Hover === true && 
              <div className="iconContainer">
              <div>
                <h2 className="skillsH2">Back-End</h2>
              </div>
              <div className="icons1">
              <div className="badgeContainer">
                  <img 
                    src={nodeIcon} className="badge" 
                  />
                  <p>Node</p>
                </div>
                <div className="badgeContainer">
                  <img 
                    src={expressIcon} className="badge" 
                  />
                  <p>Express</p>
                </div>
                <div className="badgeContainer">
                  <img 
                    src={mongoIcon} className="badge" 
                  />
                  <p>Mongo DB</p>
                </div>
                <div className="badgeContainer">
                  <img 
                    src={apIcon} className="badge" 
                  />
                  <p>RESTful API</p>
                </div>
                </div>
                </div>
            }
        </div>
      </div>
    
  )
})

export default Skills