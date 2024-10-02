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

export default function MySkillsPage() {
  return (
    <section className="flex flex-col p-3 md:flex-row-reverse md:items-center md:justify-between md:p-5 pt-[80px] md:pt-[100px] lg:pt-[174px] lg:px-20">
      <h2 className="text-[1.7rem] text-[#62777E] font-semibold pb-[1px] md:text-3xl lg:pb-[25px] lg:text-5xl">
        My Skills
      </h2>

      <div className="text-sky-100 grid place-content-center gap-4 md:grid-cols-2 md:place-items-center">
        <div className="flex flex-col items-center bg-gray-900 p-10 w-[350px] md:w-[230px] lg:w-[350px] rounded-xl">
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

        <div className="flex flex-col items-center bg-gray-900 p-10 w-[350px] md:w-[230px] lg:w-[350px] rounded-xl">
          <h3 className="md:hidden">Database Management</h3>
          <h3 className="hidden md:block">Database Man...</h3>
          <div className="flex gap-3">
            <HiDatabase size={25} />
            <HiDatabase size={25} />
            <HiDatabase size={25} />
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-900 p-10 w-[350px] md:w-[230px] lg:w-[350px] rounded-xl">
          <h3 className="md:hidden">Version Control</h3>
          <h3 className="hidden md:block">Version Cont...</h3>
          <div className="flex items-center gap-3">
            <FaGitAlt size={25} />
            <FaGithub size={25} />
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-900 p-10 w-[350px] md:w-[230px] lg:w-[350px] rounded-xl">
          <h3 className="md:hidden">Version Control</h3>
          <h3 className="hidden md:block">Version Cont...</h3>
          <div className="flex items-center gap-3">
            <FaGitAlt size={25} />
            <FaGithub size={25} />
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-900 p-10 w-[350px] md:w-[230px] lg:w-[350px] rounded-xl">
          <h3 className="md:hidden">Version Control</h3>
          <h3 className="hidden md:block">Version Cont...</h3>
          <div className="flex items-center gap-3">
            <FaGitAlt size={25} />
            <FaGithub size={25} />
          </div>
        </div>

        <div className="flex flex-col items-center bg-gray-900 p-10 w-[350px] md:w-[230px] lg:w-[350px] rounded-xl">
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
