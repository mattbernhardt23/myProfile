import { forwardRef } from "react";
import hugo from "../assets/hugo.jpeg";

const About = forwardRef((props, ref) => {
  return (
    <div
      className="bg-gradient-to-t to-neutral-100 via-neutral-300 from-neutral-900 p-10 lg:p-24 lg:pt-20"
      ref={ref}
    >
      <div className="flex flex-col items-center p-8">
        <h2 className="text-xl font-semibold font-mono">About Me</h2>
      </div>
      <div className="flex flex-col xl:flex-row w-full justify-around items-center">
        <div className="w-full lg:w-3/4 text-md font-mono tracking-wide leading-8 py-4">
          <p className="">
            My name is Matthew Bernhardt and I am passionate about dismantling
            the oppressive stereotype of the bubbly and charismatic pied piper
            of web development! However, I am a ‘self-taught’ developer (the
            internet will teach you how to use it, amazing!), so I must express
            my admiration and gratitude to all those in the web development
            community that build and maintain the vast amounts of learning
            resources that have been so instrumental in my development.
          </p>
          <br></br>
          <p>
            I have a strong background in both front-end and back-end
            development. I am well-versed in JavaScript, HTML and CSS, creating
            RESTful API’s, and the MERN (MongoDB, Express, React (also Next) and
            Node) stack.
          </p>
          <br></br>
          <p>
            I am fascinated by the potential for how blockchain technologies can
            alter the user experience of the web by providing security and
            privacy, as well as putting the power in the hands of content
            creators. With that being said, I’m actively learning to write smart
            contracts in Solidity and exploring the development of decentralized
            applications.
          </p>
        </div>
        <div className="scale-75 md:scale-100 lg:p-4 pt-10 grayscale">
          <img src={hugo} alt="hugo" />
        </div>
      </div>
    </div>
  );
});

export default About;
