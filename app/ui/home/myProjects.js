import React from "react";
import Link from "next/link";
import Image from "next/image";
import portfolio_1 from "../../../public/portfolio-1.png";
import portfolio_2 from "../../../public/portfolio-2.png";
import { FaArrowRight } from "react-icons/fa";

export default function MyProjects() {
  return (
    <section
      aria-label="See my work section"
      id="projects"
      className="p-3 md:p-5 lg:p-10"
    >
      <h2 className="text-sky-300 mb-5 font-semibold text-2xl md:text-4xl">
        My Projects
      </h2>
      <div className="text-sky-100 px-3 grid gap-8 md:grid md:grid-cols-3 md:px-5">
        <div className="flex items-center gap-3 md:flex-col md:items-start">
          <Image src={portfolio_1} width={100} height={100} alt="Portfolio" />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Next.Js Dashboard</h3>
            <Link
              href={
                "https://nextjs-dashboard-abduls-projects-7bfd8357.vercel.app/"
              }
              target="_blank"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8"
            >
              Next.Js Tailwind Vercel
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 md:flex-col md:items-start">
          <Image src={portfolio_2} width={100} height={100} alt="Portfolio" />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Handcrafted Haven</h3>
            <Link
              href={"https://haven-handcrafted.vercel.app/"}
              target="_blank"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8"
            >
              Next.Js Tailwind Vercel
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 md:flex-col md:items-start">
          <Image src={portfolio_1} width={100} height={100} alt="Portfolio" />
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

        <div className="flex items-center gap-3 md:flex-col md:items-start">
          <Image src={portfolio_2} width={100} height={100} alt="Portfolio" />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">PHP Motors</h3>
            <Link
              href={"https://github.com/abdulmahl/cse340"}
              target="_blank"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8"
            >
              PHP CSS
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 md:flex-col md:items-start">
          <Image src={portfolio_1} width={100} height={100} alt="Portfolio" />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Frontend Dev...</h3>
            <Link
              href={"https://github.com/Janalovelock/teame"}
              target="_blank"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8"
            >
              HTML CSS JavaScript
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 md:flex-col md:items-start">
          <Image src={portfolio_2} width={100} height={100} alt="Portfolio" />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Web Fundamentals</h3>
            <Link
              href={"https://github.com/abdulmahl/wdd230"}
              target="_blank"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8"
            >
              HTML CSS
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
