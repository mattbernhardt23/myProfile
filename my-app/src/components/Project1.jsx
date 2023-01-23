import { forwardRef } from "react"
import Project1Vid from "./youtube/Project1Vid"
import html5 from "../assets/html5Icon.png";
import reduxIcon from "../assets/reduxIcon.png";
import reactIcon from "../assets/reactIcon.png";
import cssIcon from "../assets/cssIcon.png";
import jsIcon from "../assets/jsIcon.png";
import mapboxIcon from "../assets/mapbox-icon.png";
import vsIcon from "../assets/vscode.png";
import expressIcon from "../assets/expressIcon.png";
import mongoIcon from "../assets/mongodbIcon.png";
import nodeIcon from "../assets/nodeIcon.png";
import npmIcon from "../assets/npmIcon.png";
import apIcon from "../assets/restApi.png";
import gitIcon from "../assets/gitIcon.png";
import nextIcon from "../assets/next.png";


const Project1 = forwardRef((props, ref) => {
  return (
    <div 
      className="bg-gradient-to-t to-black via-neutral-300 from-white lg:p-20 p-6" 
      ref={ref}
    >
      <div className="rounded-3xl p-4 bg-gradient-to-t to-white via-neutral-100 from-neutral-400">
      <div className="">
        <div className="flex flex-col items-center font-mono text-lg">
          <h1 className="font-mono text-md lg:text-lg pt-2 animate-fade-in-down animation-delay-1000">
            Featured Project
          </h1>
          <h2 className="font-mono text-lg lg:text-2xl py-4 font-extrabold tracking-widest animate-fade-in-down animation-delay-1200">
            Billionaire Map
          </h2>
        </div>
        <div className="w-full flex flex-col items-center font-mono ">
          <div className="w-11/12 lg:w-3/4 flex flex-row justify-start">
            <h3 className="font-mono font-semibold text-md md:text-lg py-4 animate-fade-in-down animation-delay-1700">
              Description
            </h3>
          </div>
          <div className="flex flex-row items-center w-11/12 lg:w-3/4">
            <div className="flex flex-col">
            <p className="tracking-wider animate-fade-in-down animation-delay-1700">
            Billionaire Map is a truly revolutionary web application changing the way we think about where billionaires live. (They live here on earth, not in some mystical universe with the lizard people) All jokes aside, this is a web app that I personally developed. Visitors to the site can learn about who these billionaires are, where they live, how they became rich, and, for better or worse, comment on them. 
            </p>
            <br></br>
            <p className="tracking-wider animate-fade-in-down animation-delay-1900">
            The application was built on the Node.js cross-platform runtime environment. The UX was built using Next.js in order to improve load times and improve overall user experience. The UI creation was enhanced by the Tailwind CSS framework. The backend, which handles user data, comments and content data is supported by Express.js and stored in a MongoDB database. State management is provided via Redux (in all honesty, Redux was far from essential, but I wanted to develop some familiarity with its usage). Finally, the map was provided by the NPM package React-Map-GL, which comes via Mapbox GL JS. The data for all billionaires is made possible by Forbes and acquired from Rapid API, then given a geolocation attribute thanks to Google Location API. 
            </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 py-8">
          <div className="w-full flex flex-row  justify-between lg:justify-around animate-fade-in-down animation-delay-2000">
            <div className="flex flex-col scale-75 lg:scale-100 items-center grayscale hover:grayscale-0">
              <a 
              href="https://nextjs.org/"
              target="_blank"
            rel="noreferrer"
              >
              <img src={nextIcon} alt="next" className="cursor-pointer"/>
              </a>
              <div>NextJS</div>
            </div>
            <div className="flex flex-col scale-75 lg:scale-100 items-center grayscale hover:grayscale-0">
              <a 
              href="https://redux.js.org/"
              target="_blank"
            rel="noreferrer"
              >
              <img src={reduxIcon} alt="redux" className="cursor-pointer"/>
              </a>
              <div>Redux</div>
            </div>
            <div className="flex flex-col scale-75 lg:scale-100 items-center grayscale hover:grayscale-0">
            <a 
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noreferrer"
            >
            <img src={nodeIcon} alt="node" className="cursor-pointer"/>
            </a>
              <div>NodeJS</div>
            </div>
            <div className="flex flex-col scale-75 lg:scale-100 items-center grayscale hover:grayscale-0">
              <a 
              href="https://expressjs.com/"
              target="_blank"
            rel="noreferrer"
              >
              <img src={expressIcon} alt="express" className="cursor-pointer"/>
              </a>
              <div>ExpressJS</div>
            </div>
            <div className="flex flex-col scale-75 lg:scale-100 items-center grayscale hover:grayscale-0">
              <a 
              href="https://www.mongodb.com/"
              target="_blank"
            rel="noreferrer"
              >
              <img src={mongoIcon} alt="mongo" className="cursor-pointer"/>
              </a>
              <div>MongoDB</div>
            </div>
            <div className="flex flex-col scale-75 lg:scale-100 items-center grayscale hover:grayscale-0">
              <a 
              href="https://www.mapbox.com/"
              target="_blank"
            rel="noreferrer"
              >
              <img src={mapboxIcon} alt="mapbox" className="cursor-pointer"/>
              </a>
              <div>Mapbox</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center py-12">
          <div className="flex flex-row w-full md:w-1/2 justify-around animate-fade-in-down animation-delay-2500">
        <div>
          <a 
            href="https://github.com/mattbernhardt23/billionaireMap" target="_blank" rel="noreferrer"
          >
            <button className="border-2 border-black rounded-lg p-4 font-extrabold text-slate-200 bg-gradient-to-l to-neutral-500 from-neutral-900 hover:scale-110 ease-in-out duration-500">Source Code</button>
          </a>
        </div>
        <div className="">
          <a 
            href="https://billionaire-map.herokuapp.com/" target="_blank" rel="noreferrer"
          >
            <button className="border-2 border-black rounded-lg p-4 font-extrabold text-slate-200 bg-gradient-to-l to-neutral-500 from-neutral-900 tracking-widest hover:scale-110 ease-in-out duration-500">See It Live</button>
          </a>
          </div>
        </div>
        </div>
      </div>
      <div className="flex flex-col scale-50 md:scale-100 items-center py-2 lg:py-8 grayscale hover:grayscale-0 animate-fade-in-down animation-delay-2500">
        <Project1Vid />
      </div>
      </div>
    </div>
  )
})

export default Project1