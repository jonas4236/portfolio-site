import { Link } from "react-router-dom";

// icon
import { FiGithub } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";

interface ProjectsProps {
  id: number;
  title: string;
  desc: string;
  techStack: {
    id: number;
    title: string;
    image: string;
    class: string;
  }[];
  repoId: string;
  repoImage: string;
  repoDemo: string;
  repoGithub: string;
}

interface DataProjectRecieved {
  project: ProjectsProps;
}

const DetailsSlideResponsive = ({ project }: DataProjectRecieved) => {
  return (
    <>
      <div className="p-8 flex-[2] bg-[#151B2D] rounded-[18px_18px_0_0]">
        <h1 className="xl:text-[36px] lg:text-[36px] md:text-[28px] sm:text-[24px] max-[639px]:text-[24px]">
          {project.title}
        </h1>
        <div className="">
          <p className="mt-6 xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[16px] max-[639px]:text-[16px]">
            {project.desc}
          </p>
        </div>
        <h1 className="mt-6 xl:text-[32px] lg:text-[32px] md:text-[28px] sm:text-[24px] max-[639px]:text-[24px]">
          TechStack 🧑‍💻
        </h1>
        <div className="grid grid-cols-5">
          {project.techStack.map((tech) => (
            <div
              key={tech.id}
              className={`mt-4 tooltip w-[64px] h-[64px] xl:w-[64px] lg:w-[64px] md:w-[64px] sm:w-[64px] max-[639px]:w-[56px] max-[460px]:w-[40px] max-[460px]:h-[40px] tooltip-${tech.class} w-max`}
              data-tip={tech.title}
            >
              <img className="size-16 object-contain max-[460px]:h-[40px]" src={tech.image} alt="" />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <div className="flex">
            {project.repoDemo && (
              <Link to={project.repoDemo}>
                <button className="inline-flex mr-8 h-12 animate-shimmer items-center justify-center rounded-md border-2 outline-none border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-white/50 max-[639px]:w-[130px] max-[639px]:text-[14px] max-[460px]:h-[40px]">
                  <IoVideocamOutline className="mr-2" size={25} />
                  Watch Demo
                </button>
              </Link>
            )}
            <Link to={project.repoGithub}>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border-2 outline-none border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:text-white/50 max-[639px]:w-[130px] max-[639px]:text-[14px] max-[460px]:h-[40px]">
                <FiGithub className="mr-2" size={25} />
                GitHub Repository
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-8 flex-[2] bg-[#151B2D] rounded-[0_0_18px_18px]">
        <div className="flex">
          <img
            className="object-contain shadow-slate-400"
            src={project.repoImage}
            alt={project.repoId}
          />
        </div>
      </div>
    </>
  );
};

export default DetailsSlideResponsive;
