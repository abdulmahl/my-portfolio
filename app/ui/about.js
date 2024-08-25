import image from "../../public/aboutImage1.jpg";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="p-3 pt-[100px] flex flex-col-reverse gap-5 md:flex-row md:justify-between md:p-5 md:pt-[180px] lg:pt-[260px] lg:p-10"
    >
      <Image
        src={image}
        width={500}
        height={0}
        alt="About"
        className="md:hidden rounded-xl"
      />

      <Image
        src={image}
        width={300}
        height={"auto"}
        alt="About"
        className="hidden md:block lg:hidden rounded-xl w-[50%]"
      />

      <Image
        src={image}
        width={400}
        height={0}
        alt="About"
        className="hidden md:hidden lg:block w-[45%] rounded-xl"
      />

      <div className="flex flex-col md:w-[50%]">
        <h2 className="text-[1.7rem] text-sky-300 font-semibold pb-[1px] md:text-3xl lg:pb-[25px] lg:text-5xl">
          About Me
        </h2>
        <p className="text-sm text-sky-100 pb-[10px] lg:text-lg">
          Hello there my name is Abdul! I&apos;m a third-year student at Brigham
          Young University Idaho pursuing a major in Software Development.
          Currently employed at Eragateway as a full-stack developer intern.
        </p>
        <p className="text-sm text-sky-100 pb-[25px] lg:text-lg">
          My journey at BYU-Idaho has equipped me with the skills and knowledge
          necessary to tackle real-world challenges in the tech industry. I am
          passionate about coding and problem-solving and I&apos;m eager to
          contribute my skills to innovative projects. With a strong foundation
          in web development and a drive to continuously learn and grow I&apos;m
          ready to embark on an exciting career path in web and software
          development.
        </p>
      </div>
    </section>
  );
}
