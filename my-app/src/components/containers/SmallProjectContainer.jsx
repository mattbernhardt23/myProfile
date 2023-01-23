import React from "react";
import SmallProjectCard from "../items/SmallProjectCard";
import data from "../../data/data.json" 

function SmallProjectContainer() {
  return (
    <div className="bg-gradient-to-t to-black via-neutral-400 from-neutral-100 p-10">
      <div className="flex flex-col items-center p-20 font-mono font-semibold text-xl text-white">
        <h1>Other Notable Projects</h1>
      </div>
      <div className="flex flex-col md:flex-row w-full lg:justify-around">
        {data.map((project) => {
          return <SmallProjectCard id={project.id} project={project} />
        })}
      </div>
    </div>
  );
}

export default SmallProjectContainer;
