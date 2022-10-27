import { forwardRef } from 'react'
import me from '../assets/me.jpg'

const About = forwardRef((props, ref) => {
  return (
    <div className="aboutContainer" ref={ref}>
      <div className="aboutHeader">
        <h2 className="aboutH2">About Me</h2>
      </div>
      <div className="bioContainer">
        <div className="bio">
          <p>
            In life, I am a man on a journey. Most recently, I was a Finance Manager at a Land Rover Store. I have a wealth of home construction experience, even working alongside my uncle to build my mom's house, and working in restaurants while I got my degree in Finance from the University of Colorado. 
            </p><p>
            I am proud to say that I am a self-taught developer as I believe it demonstrates my self-starter mentality, perseverence and eagerness to learn.
            </p><p>
            In my spare time, my first priority is taking care of my dog, Hugo. I also love to read and enjoy a variety of athletic activities such as basketball, running, swimming and yoga. 
          </p>
        </div>
        <div className="selfPicture">
          <img src={me} alt="" />
        </div>
      </div>
    </div>
  )
})

export default About