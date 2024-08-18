import React from "react";
import Link from "next/link";
import Image from "next/image";
import portfolio_1 from "../../public/portfolio-1.png";
import portfolio_2 from "../../public/portfolio-2.png";
import { FaArrowRight } from "react-icons/fa";

export default function MyProjects() {
  return (
    <section
      id="projects"
      className="p-3 pt-[95px] md:p-5 lg:p-10 md:pt-[110px] lg:pt-[170px] lg:p-10"
    >
      <h2 className="text-[1.7rem] text-sky-300 font-semibold pb-[30px] md:text-3xl lg:pb-[55px] lg:text-5xl">
        My Projects
      </h2>
      <div className="text-sky-100 grid gap-4 md:grid md:grid-cols-3 lg:place-items-center">
        <div className="flex flex-col items-center gap-3 md:flex-col md:items-start">
          <Image
            src={portfolio_1}
            width={200}
            height={200}
            alt="Portfolio"
            className="md:hidden lg:hidden w-[350px]"
          />
          <Image
            src={portfolio_1}
            width={200}
            height={200}
            alt="Portfolio"
            className="hidden md:block w-[330px] lg:w-[350px]"
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-nowrap">
              Fullstack Development
            </h3>
            <Link
              href={
                "https://nextjs-dashboard-abduls-projects-7bfd8357.vercel.app/"
              }
              target="_blank"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8"
            >
              View Project
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-col md:items-start">
          <Image
            src={portfolio_2}
            width={200}
            height={200}
            alt="Portfolio"
            className="md:hidden lg:hidden w-[350px]"
          />
          <Image
            src={portfolio_2}
            width={200}
            height={200}
            alt="Portfolio"
            className="hidden md:block w-[330px] lg:w-[350px]"
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-nowrap">
              Fullstack Development
            </h3>
            <Link
              href={"https://haven-handcrafted.vercel.app/"}
              target="_blank"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8"
            >
              View Project
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-col md:items-start">
          <Image
            src={portfolio_1}
            width={200}
            height={200}
            alt="Portfolio"
            className="md:hidden lg:hidden w-[350px]"
          />
          <Image
            src={portfolio_1}
            width={200}
            height={200}
            alt="Portfolio"
            className="hidden md:block w-[330px] lg:w-[350px]"
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Web Services</h3>
            <Link
              href={"https://final-project-qesp.onrender.com/"}
              target="_blank"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8"
            >
              Node.Js MongoDB
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-col md:items-start">
          <Image
            src={portfolio_2}
            width={200}
            height={200}
            alt="Portfolio"
            className="md:hidden lg:hidden w-[350px]"
          />
          <Image
            src={portfolio_2}
            width={200}
            height={200}
            alt="Portfolio"
            className="hidden md:block w-[330px] lg:w-[350px]"
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <Link
              href={"https://github.com/abdulmahl/cse340"}
              target="_blank"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8"
            >
              View Project
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-col md:items-start">
          <Image
            src={portfolio_1}
            width={200}
            height={200}
            alt="Portfolio"
            className="md:hidden lg:hidden w-[350px]"
          />
          <Image
            src={portfolio_1}
            width={200}
            height={200}
            alt="Portfolio"
            className="hidden md:block w-[330px] lg:w-[350px]"
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-nowrap">
              Frontend Development
            </h3>
            <Link
              href={"https://github.com/Janalovelock/teame"}
              target="_blank"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8"
            >
              View Project
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-col md:items-start">
          <Image
            src={portfolio_2}
            width={200}
            height={200}
            alt="Portfolio"
            className="md:hidden lg:hidden w-[350px]"
          />
          <Image
            src={portfolio_2}
            width={200}
            height={200}
            alt="Portfolio"
            className="hidden md:block w-[330px] lg:w-[350px]"
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Web Fundamentals</h3>
            <Link
              href={"https://github.com/abdulmahl/wdd230"}
              target="_blank"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8"
            >
              View Project
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
