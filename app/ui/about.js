import image from "../../public/image.jpeg";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="p-3 pt-[110px] flex flex-col-reverse gap-5 md:flex-row md:items-center md:justify-between lg:justify-between md:p-5 md:pt-[110px] lg:pt-[140px] lg:p-10"
    >
      <Image
        src={image}
        width={500}
        height={0}
        alt="About"
        className="m-auto md:w-[50%]"
      />

      <div className="flex flex-col md:w-[50%]">
        <h1 className="text-[1.7rem] text-sky-300 font-semibold pb-[1px] md:text-3xl lg:pb-[25px] lg:text-5xl">
          About Me
        </h1>
        <p className="text-sm text-sky-100 pb-[25px] lg:text-lg">
          Hello there my name is Abdul! I'm a third-year student at Brigham
          Young University, pursuing a major in Software Development. Currently
          employed at Eragateway, I am a
          full-stack developer intern.
        </p>
        <p className="text-sm text-sky-100 pb-[25px] lg:text-lg">
          My journey at BYU has equipped me with the skills and knowledge
          necessary to tackle real-world challenges in the tech industry. I am
          passionate about coding and problem-solving, and I'm eager to
          contribute my skills to innovative projects. With a strong foundation
          in web development and a drive to continuously learn and grow, I'm
          ready to embark on an exciting career path in software development.
        </p>
      </div>
    </section>
  );
}
