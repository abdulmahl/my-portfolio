import React from "react";
import Link from "next/link";
import Image from "next/image";
import portfolio_1 from "../../public/port-1.jpg";
import portfolio_2 from "../../public/port-2.jpg";
import portfolio_3 from "../../public/port-3.jpg";
import portfolio_4 from "../../public/port-4.jpg";
import portfolio_5 from "../../public/port-5.jpg";
import portfolio_6 from "../../public/port-6.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function MyProjects() {
  return (
    <section
      id="projects"
      className="p-3 pt-[100px] md:p-5 lg:p-10 md:pt-[130px] lg:pt-[200px] lg:p-10"
    >
      <h2 className="text-[1.7rem] text-sky-300 font-semibold pb-[30px] md:text-3xl lg:pb-[55px] lg:text-5xl">
        My Projects
      </h2>
      <div className="text-sky-100 grid gap-20 md:grid md:grid-cols-2 lg:grid-cols-3 lg:place-items-center">
        <div className="flex flex-col items-start m-auto gap-3">
          <Image
            src={portfolio_1}
            width={200}
            height={200}
            alt="Portfolio"
            className="md:hidden lg:hidden w-[350px] rounded-2xl"
          />
          <Image
            src={portfolio_1}
            width={200}
            height={200}
            alt="Portfolio"
            className="hidden md:block md:w-[270px] lg:w-[350px] rounded-2xl"
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

        <div className="flex flex-col items-start m-auto gap-3">
          <Image
            src={portfolio_2}
            width={200}
            height={200}
            alt="Portfolio"
            className="md:hidden lg:hidden w-[350px] rounded-2xl"
          />
          <Image
            src={portfolio_2}
            width={200}
            height={200}
            alt="Portfolio"
            className="hidden md:block md:w-[270px] lg:w-[350px] rounded-2xl"
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

        <div className="flex flex-col items-start m-auto gap-3">
          <Image
            src={portfolio_3}
            width={200}
            height={200}
            alt="Portfolio"
            className="md:hidden lg:hidden w-[350px] rounded-2xl"
          />
          <Image
            src={portfolio_3}
            width={200}
            height={200}
            alt="Portfolio"
            className="hidden md:block md:w-[270px] lg:w-[350px] rounded-2xl"
          />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Web Services</h3>
            <Link
              href={"https://basketball-players-api.onrender.com/api-docs"}
              target="_blank"
              className="flex items-center gap-2 hover:underline hover:underline-offset-8"
            >
              View Project
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start m-auto gap-3">
          <Image
            src={portfolio_4}
            width={200}
            height={200}
            alt="Portfolio"
            className="md:hidden lg:hidden w-[350px] rounded-2xl"
          />
          <Image
            src={portfolio_4}
            width={200}
            height={200}
            alt="Portfolio"
            className="hidden md:block md:w-[270px] lg:w-[350px] rounded-2xl"
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

        <div className="flex flex-col items-start m-auto gap-3">
          <Image
            src={portfolio_5}
            width={200}
            height={200}
            alt="Portfolio"
            className="md:hidden lg:hidden w-[350px] rounded-2xl"
          />
          <Image
            src={portfolio_5}
            width={200}
            height={200}
            alt="Portfolio"
            className="hidden md:block md:w-[270px] lg:w-[350px] rounded-2xl"
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

        <div className="flex flex-col items-start m-auto gap-3">
          <Image
            src={portfolio_6}
            width={200}
            height={200}
            alt="Portfolio"
            className="md:hidden lg:hidden w-[350px] rounded-2xl"
          />
          <Image
            src={portfolio_6}
            width={200}
            height={200}
            alt="Portfolio"
            className="hidden md:block md:w-[270px] lg:w-[350px] rounded-2xl"
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
