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
    <section className="p-3 md:p-5 lg:p-10">
      <h2 className="text-sky-300 mb-3 font-semibold text-2xl md:text-4xl">
        My Skills
      </h2>
      <div className="flex flex-col px-3 text-sky-100 leading-8 text-sm md:text-lg md:px-5 md:leading-9 lg:text-2xl lg:leading-loose">
        <div className="flex flex-col gap-1 mb-5 md:flex-row md:items-center md:justify-between">
          <h3>Web Development:</h3>
          <div className="flex gap-3">
            <FaHtml5 size={25} />
            <FaCss3 size={25} />
            <FaJs size={25} />
            <FaNodeJs size={25} />
            <FaReact size={25} />
          </div>
        </div>

        <div className="flex flex-col mb-5 md:flex-row md:justify-between md:items-center">
          <h3>Database Management:</h3>
          <div className="flex gap-3">
            <HiDatabase size={25} />
            <HiDatabase size={25} />
            <HiDatabase size={25} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h3>Version Control:</h3>
          <div className="flex items-center gap-3">
            <FaGitAlt size={25} />
            <FaGithub size={25} />
          </div>
        </div>
      </div>
    </section>
  );
}
