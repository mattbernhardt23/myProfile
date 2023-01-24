import IconCluster from "./IconCluster";
import LinkButtons from "./LinkButtons";
import { useEffect, useState } from "react";


function Main({ refObj }) {
  const [elementDisplayType, setElementDisplayType] = useState('hidden')

  useEffect(() => {
    setTimeout(() => {
      setElementDisplayType("absolute")
    }, 4000)
  }, [elementDisplayType])

  return (
    <div className="h-[125vh] w-full bg-black p-8">
    <div className={`flex flex-row-reverse justify-between relative rounded-3xl bg-pattern bg-no-repeat bg-cover bg-center animate-fade-in`}
    >
      
      <LinkButtons refObj={refObj}/>
      <div className="relative w-2/3">
        <IconCluster />
        <div className={`${elementDisplayType} bottom-4 left-2 md:bottom-12 md:left-6  text-black bg-white rounded-3xl p-2 md:p-4 font-mono font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wide md:tracking-widest animate-fade-in`}>
          <div className="py-1 lg:py-3">Matthew Bernhardt</div>
          <div className="text-xl md:text-2xl lg:text-3xl">Full-Stack Developer</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Main;

