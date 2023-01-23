import { useEffect, useState } from "react";

function LinkButtons({ refObj }) {
  const [displayType, setDisplayType] = useState("hidden");

  useEffect(() => {
    setTimeout(() => {
      setDisplayType("flex");
    }, 4000);
  }, [displayType]);

  return (
    <div
      className={`h-screen pr-2 py-2 ${displayType} flex-col content-between animate-fade-in`}
    >
      <div
        className="w-48 h-16 md:w-64 md:h-32 xl:w-96 xl:h-48 bg-white rounded-3xl border-4 border-black hover:bg-black hover:text-white hover:text-3xl md:hover:text-5xl xl:hover:text-7xl ease-in-out duration-500 relative font-mono font-bold text-lg cursor-pointer text-black"
        onClick={() =>
          refObj.projectRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="absolute top-4 right-4">PROJECTS</div>
      </div>
      <div
        className="my-1 md:my-4 w-48 h-16 md:w-64 md:h-32 xl:w-96 xl:h-48 bg-white rounded-3xl border-4 border-black hover:bg-black hover:text-white hover:text-3xl md:hover:text-5xl xl:hover:text-7xl ease-in-out duration-500 relative font-mono font-bold text-lg cursor-pointer text-black"
        onClick={() =>
          refObj.aboutRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="absolute top-4 right-4 z-10">ABOUT</div>
      </div>
      <div
        className="w-48 h-16 md:w-64 md:h-32 xl:w-96 xl:h-48 bg-white rounded-3xl border-4 border-black hover:bg-black hover:text-white hover:text-3xl md:hover:text-5xl xl:hover:text-7xl ease-in-out duration-500 relative font-mono font-bold text-lg cursor-pointer text-black"
        onClick={() =>
          refObj.contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="absolute top-4 right-4">CONTACT</div>
      </div>
    </div>
  );
}

export default LinkButtons;

// <div className='flex flex-row mx-auto text-yellow-700'>
// <LinkButton
//     onClick={() => refObj.skillsRef.current?.scrollIntoView({behavior: 'smooth'})}
// >
//    Skills
// </LinkButton>
// <LinkButton
//     onClick={() => refObj.projectRef.current?.scrollIntoView({behavior: 'smooth'})}
// >
//     Projects
// </LinkButton>
// <LinkButton
//     onClick={() => refObj.aboutRef.current?.scrollIntoView({behavior: 'smooth'})}
// >
//     About
// </LinkButton>
// <LinkButton
//     onClick={() => refObj.contactRef.current?.scrollIntoView({behavior: 'smooth'})}
// >
//     Contact
// </LinkButton>
// </div>
