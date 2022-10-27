

import { useState } from "react"

function Skills() {
  const [div1hover, setDiv1hover] = useState(false)
  const [div3hover, setDiv3hover] = useState(false)

  return (
    <div className="skills-wrapper">
        <div className="skills-overlay">
            <div className="left-overlay"></div>
            <div className="middle-overlay"></div>
            <div className="right-overlay"></div>
        </div>
    </div>
  )
}

export default Skills