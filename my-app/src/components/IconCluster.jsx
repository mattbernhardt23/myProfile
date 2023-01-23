import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { useEffect, useState } from "react"; 

function IconCluster() {
  const [displayType, setDisplayType] = useState('hidden')
  

  useEffect(() => {
    setTimeout(() => {
      setDisplayType("flex")
    }, 4000)

  }, [displayType])


  return (
    <div className={`${displayType} flex-row p-4 text-black animate-fade-in`}>
      <div className="h-16 w-16 md:h-20 md:w-20 xl:h-24 xl:w-24 border-4 border-black rounded-full flex items-center justify-center bg-white hover:bg-black hover:text-white">
        <div className="text-3xl md:text-4xl xl:text-5xl hover:scale-110">
          <a
            href="https://www.linkedin.com/in/matthew-bernhardt-20315545/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="fa-icon" />
          </a>
        </div>
      </div>
      <div className="mx-2 h-16 w-16 md:h-20 md:w-20 xl:h-24 xl:w-24 border-4 border-black rounded-full flex items-center justify-center bg-white hover:bg-black hover:text-white">
        <div className="text-3xl md:text-4xl xl:text-5xl hover:scale-110">
          <a
            href="https://github.com/mattbernhardt23"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="fa-icon" />
          </a>
        </div>
      </div>
      <div className="h-16 w-16 md:h-20 md:w-20 xl:h-24 xl:w-24 border-4 border-black rounded-full flex items-center justify-center bg-white hover:bg-black hover:text-white">
        <div className="text-3xl md:text-4xl xl:text-5xl hover:scale-110">
          <a
            href="https://drive.google.com/file/d/1XoPKum1mpnwGKSqBLuERJtW26l6nO3GY/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <FaFileDownload className="fa-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default IconCluster;
