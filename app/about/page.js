import image from "../../public/aboutImage.jpg";
import Image from "next/image";

export default function AboutMePage() {
  return (
    <section
      id="about"
      className="p-3 pt-[80px] flex flex-col-reverse gap-5 md:flex-row md:justify-between md:items-center md:p-0 md:pt-[90px] lg:pt-[130px] lg:px-20"
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
        alt="About"
        className="hidden md:block lg:hidden w-[50%] h-full object-contain"
      />

      <Image
        src={image}
        alt="About"
        className="hidden md:hidden lg:block w-[50%]"
      />

      <div className="flex flex-col md:w-[50%]">
        <h2 className="text-[1.7rem] text-[#62777E] font-semibold pb-[1px] md:text-3xl lg:pb-[25px] lg:text-5xl">
          About Me
        </h2>

        <p className="text-sm text-sky-100 lg:text-lg">
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
