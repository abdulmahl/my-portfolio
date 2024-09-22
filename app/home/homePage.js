import React from "react";
import Link from "next/link";
import Image from "next/image";
import image from "../../public/heroImage.jpg";
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <section
        className={`p-3 pt-[80px] flex flex-col gap-5 items-center md:pt-[100px] md:flex-row lg:items-center lg:justify-between lg:px-20 lg:pt-[150px]`}
      >
        <div className="md:w-[50%]">
          <h1
            className={
              "text-[1.7rem] text-sky-300 font-semibold pb-[1px] md:text-3xl lg:pb-[25px] lg:text-5xl"
            }
          >
            M. Abdul Mahlangu
          </h1>
          <p
            className={
              "md:hidden lg:hidden text-sm text-sky-100 pb-[25px] lg:text-lg"
            }
          >
            Welcome to my portfolio! I&apos;m a Full-Stack Developer with a
            passion for creating innovative and efficient solutions. Explore my
            projects learn more about my skills and feel free to reach out if
            you&apos;d like to collaborate.
          </p>

          <p
            className={"hidden lg:hidden md:block md:text-sky-100 md:pb-[15px]"}
          >
            Welcome to my portfolio! I&apos;m a Full-Stack Developer with a
            passion for creating innovative and efficient solutions. Explore my
            projects learn more about my skills and feel free to reach out if
            you&apos;d like to collaborate.
          </p>

          <p
            className={
              "hidden md:hidden lg:block text-sky-100 pb-[30px] lg:text-lg"
            }
          >
            Welcome to my portfolio! I&apos;m a Full-Stack Developer with a
            passion for creating innovative and efficient solutions. Explore my
            projects learn more about my skills and feel free to reach out if
            you&apos;d like to collaborate.
          </p>
          <div className="flex gap-5 items-center">
            <div
              className={`flex justify-center items-center gap-3 w-[170px] lg:w-[190px] text-md text-sky-100 bg-blue-800 p-3 rounded-xl hover:bg-blue-900 lg:text-lg`}
            >
              <Link href="#projects">See My Work</Link>
              <FaArrowRight />
            </div>

            <div
              className={`flex justify-center items-center gap-3 w-[170px] lg:w-[190px] text-md text-sky-100 bg-blue-800 p-3 rounded-xl hover:bg-blue-900 lg:text-lg`}
            >
              <Link href="#contact">Get In Touch</Link>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <Image
          src={image}
          width={400}
          height={0}
          alt="Hero"
          className="md:hidden rounded-xl"
        />
        <Image
          src={image}
          width={300}
          height={0}
          alt="Hero"
          className="hidden md:block lg:hidden rounded-xl w-[50%]"
        />

        <Image
          src={image}
          width={400}
          height={0}
          alt="Hero"
          className="hidden md:hidden lg:block lg:w-[41%] rounded-xl"
        />
      </section>
    </>
  );
}
