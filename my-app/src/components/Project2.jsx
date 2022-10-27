import Project1Vid from "./youtube/Project1Vid"
import ProjectVid2 from "./youtube/ProjectVid2"


function Project2() {
  return (
    <div className="projectContainer">
      <div className="projectInfoContainer">
        <div className="projectTitle">
          <h2>Stock Search</h2>
        </div>
        <div className="projectDescContainer">
          <h3 className="projectH3">Description</h3>
          <p className="projectDesc">This application will allow user to search for companies using the Yahoo Finance API. The search results will return critical market data about the company.</p>
        </div>
        <div >
          <h3>Tools</h3>
          <div>
            <div className="toolsUsed">
            <div className="toolsBox">React</div>
            <div className="toolsBox">Yahoo Finance API</div>
            </div>
          </div>
        </div>
        <div className="sourceButtonContainer">
          <a 
            href="https://github.com/mattbernhardt23/StockFinderApp" target="_blank" rel="noreferrer"
          >
            <button className="sourceButton">Source Code</button>
          </a>
        </div>
      </div>
      <div className="vidContainer">
        <ProjectVid2 />
      </div>
    </div>
  )
}

export default Project2