import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import { HiDatabase } from "react-icons/hi";

export default function MySkills() {
  return (
    <section
      id="skills"
      className="p-3 md:p-5 pt-[110px] md:pt-[130px] lg:pt-[230px] lg:p-10"
    >
      <h1 className="text-[1.7rem] text-sky-300 font-semibold pb-[1px] md:text-3xl lg:pb-[25px] lg:text-5xl">
        My Skills
      </h1>
      <div className="flex flex-col text-sky-100 leading-8 text-sm md:text-lg md:px-5 md:leading-9 md:flex-row md:justify-between md:gap-5 lg:text-2xl lg:leading-loose">
        <div className="flex flex-col items-center bg-gray-900 p-10 max-w-[380px] md:max-w-[200px] lg:max-w-[350px] my-5">
          <h3 className="md:hidden">Web Development</h3>
          <h3 className="hidden md:block">Web Devel...</h3>
          <div className="flex gap-3">
            <FaHtml5 size={25} />
            <FaCss3 size={25} />
            <FaJs size={25} />
            <FaNodeJs size={25} />
            <FaReact size={25} />
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-900 p-10 max-w-[380px] md:max-w-[300px] lg:max-w-[350px] my-5">
          <h3 className="md:hidden">Database Management</h3>
          <h3 className="hidden md:block">Database Man...</h3>
          <div className="flex gap-3">
            <HiDatabase size={25} />
            <HiDatabase size={25} />
            <HiDatabase size={25} />
          </div>
        </div>
        <div className="flex flex-col items-center bg-gray-900 p-10 max-w-[380px] md:max-w-[300px] lg:max-w-[350px] my-5">
          <h3 className="md:hidden">Version Control</h3>
          <h3 className="hidden md:block">Version Cont...</h3>
          <div className="flex items-center gap-3">
            <FaGitAlt size={25} />
            <FaGithub size={25} />
          </div>
        </div>
      </div>
    </section>
  );
}
