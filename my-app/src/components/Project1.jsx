import { forwardRef } from "react"
import Project1Vid from "./youtube/Project1Vid"


const Project1 = forwardRef((props, ref) => {
  return (
    <div className="projectContainer" ref={ref}>
      <div className="projectInfoContainer">
        <div className="projectTitle">
          <h2>Billionaire Map</h2>
        </div>
        <div className="projectDescContainer">
          <h3 className="projectH3">Description</h3>
          <div className="pContainer">
          <p className="projectDesc">
            Ever wondered where all the billionaires live?This application will search the the billionaires within a given country and display them on a map. You can also see a list that includes their names, net-worth and bios.</p>
          </div>
        </div>
        <div className="toolConatainer">
          <h3>Tools</h3>
          <div>
            <div className="toolsUsed">
            <div className="toolsBox">React</div>
            <div className="toolsBox">Redux</div>
            <div className="toolsBox">Mapbox</div>
            <div className="toolsBox">Node/Express</div>
            </div>
            <div className="toolsUsed">
            
            <div className="toolsBox">MongoDB</div>
            <div className="toolsBox">Google Places API</div>
            <div className="toolsBox">Rapid API</div>
            </div>
          </div>
        </div>
        <div className="sourceButtonContainer">
          <a 
            href="https://github.com/mattbernhardt23/billionaireMap" target="_blank" rel="noreferrer"
          >
            <button className="sourceButton">Source Code</button>
          </a>
        </div>
      </div>
      <div className="vidContainer">
        <Project1Vid />
      </div>
    </div>
  )
})

export default Project1