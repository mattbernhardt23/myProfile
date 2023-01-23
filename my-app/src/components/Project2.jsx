import { forwardRef } from "react";
import Project1Vid from "./youtube/Project1Vid";
import nodeIcon from "../assets/nodeIcon.png";
import nextIcon from "../assets/next.png";
import solidity from "../assets/solidity.png";
import metamask from "../assets/metamask.png";

function Project2() {
  return (
    <div className="bg-gradient-to-t from-black via-neutral-300 to-white lg:p-20 p-6">
      <div className="rounded-3xl p-4 bg-gradient-to-t to-neutral-400 via-neutral-100 from-white">
        <div className="">
          <div className="flex flex-col items-center font-mono text-lg">
            <h1 className="font-mono text-md lg:text-lg pt-2 animate-fade-in-down animation-delay-300">
              Featured Project
            </h1>
            <div className="flex flex-col items-center font-mono text-lg lg:text-2xl py-4 tracking-widest animate-fade-in-down animation-delay-500">
            <h2 className="text-lg lg:text-2xl font-extrabold">
              Product is Purpose
            </h2>
            <h3 className="text-md lg:text-lg">Ethereum Blockchain E-Commerce Site</h3>
            </div>
          </div>
          <div className="w-full flex flex-col items-center font-mono ">
            <div className="w-11/12 lg:w-3/4 flex flex-row justify-start">
              <h3 className="font-mono font-semibold text-md md:text-lg py-4 animate-fade-in-down animation-delay-700">
                Description
              </h3>
            </div>
            <div className="flex flex-row items-center w-11/12 lg:w-3/4">
              <div className="flex flex-col">
                <p className="tracking-wider animate-fade-in-down animation-delay-700">
                Product is Purpose is an Ethereum Blockchain site that allows users to purchase digital rights to videos that I’ve created. This project was an opportunity to familiarize myself with accessing the blockchain through a web application and creating a smart contracts, as well as an opportunity flesh out my ideas on a variety of subjects and further develop presentation and communication skills. 
                </p>
                <br></br>
                <p className="tracking-wider animate-fade-in-down animation-delay-900">
                This application was built following the Udemy course, Solidity & Ethereum in React(Next.js): The Complete Guide by Filip Jerga. This is a fantastic course that I highly recommend. The application is build using Next.js and accesses the blockchain by connecting the users Metamask wallet. The smart contracts controlling the access to digital content and payment transactions are written in Solidity. The site will go live upon the completion of digital content. Until then, feel free to explore the current code. 
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 py-8">
            <div className="w-full flex flex-row  justify-between lg:justify-around animate-fade-in-down animation-delay-1000">
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
                href="https://docs.soliditylang.org/en/v0.8.17/#"
            target="_blank"
            rel="noreferrer"
                >
                <img src={solidity} alt="solidity" className="cursor-pointer"/>
                </a>
                <div>Solidity</div>
              </div>
              <div className="flex flex-col scale-75 lg:scale-100 items-center grayscale hover:grayscale-0">
                <a 
                href="https://metamask.io/"
            target="_blank"
            rel="noreferrer"
                >
                <img src={metamask} alt="metamask" className="cursor-pointer"/>
                </a>
                <div>Metamask</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-12">
            <div className="flex flex-row w-full md:w-1/2 justify-around animate-fade-in-down animation-delay-1200">
              <div>
                <a
                  href="https://github.com/mattbernhardt23/billionaireMap"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="border-2 border-black rounded-lg p-4 font-extrabold text-slate-200 bg-gradient-to-l to-neutral-500 from-neutral-900 hover:scale-110 ease-in-out duration-500">
                    Source Code
                  </button>
                </a>
              </div>
              <div className="">
                {/* <a 
            href="https://github.com/mattbernhardt23/billionaireMap" target="_blank" rel="noreferrer"
          > */}
                <button className="border-2 border-black rounded-lg p-4 font-extrabold text-slate-200 bg-gradient-to-l to-neutral-500 from-neutral-900 tracking-widest hover:scale-110 ease-in-out duration-500">
                  Coming Soon
                </button>
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;
