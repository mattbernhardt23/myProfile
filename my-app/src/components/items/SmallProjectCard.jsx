import { FaGithub } from "react-icons/fa";
 
function SmallProjectCard({project}) {
  return (
    <div className="rounded-3xl p-4 bg-gradient-to-t to-white via-neutral-100 from-neutral-400 w-11/12 lg:w-2/5 m-4">
      <div className="flex flex-col items-center h-full justify-between font-mono text-lg">
        <div className="flex flex-row justify-between w-full">
          <h2 className="font-mono text-lg py-4 font-extrabold tracking-widest">
            {project.title}
          </h2>
          <div className="flex flex-row items-center">
            <div className="text-3xl px-2 hover:scale-110 animate-fade-in-up ">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="fa-icon" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm">
          {project.description} 
          </p>
        </div>
        <div className="flex flex-row w-full justify-around py-4 text-sm">
          {project.technologies.map((item) => {
            return <div>{item}</div>
          })}
        </div>
      </div>
    </div>
  );
}

export default SmallProjectCard;
