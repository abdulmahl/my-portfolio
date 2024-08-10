import React from "react";
import HeroBackgroundImage from "./heroBackgroundImage";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <HeroBackgroundImage />
      <section className={` absolute p-5 md:py-7 md:mr-[220px] lg:mr-[800px]`}>
        <h2
          className={
            "text-md text-green-500 font-semibold pb-[1px] md:text-xl lg:pb-[5px] lg:text-2xl"
          }
        >
          <em>Power Your Future with Clean, Reliable Energy</em>
        </h2>
        <p
          className={
            "md:hidden lg:hidden text-sm text-gray-400 pb-[25px] lg:text-lg"
          }
        >
          Join countless others who have made the switch to solar energy. Save
          on your electricity bills and contribute to a greener planet with TVK
          Solar and Electrical Services.
        </p>

        <p
          className={
            "hidden lg:hidden md:block text-gray-400 pb-[25px] lg:text-lg"
          }
        >
          Join countless others who have made the switch to solar energy. <br />
          Save on your electricity bills and contribute to a greener planet{" "}
          <br /> with TVK Solar and Electrical Services.
        </p>

        <p
          className={
            "hidden md:hidden lg:block text-gray-400 pb-[30px] lg:text-lg"
          }
        >
          Join countless others who have made the switch to solar energy. <br />{" "}
          Save on your electricity bills and contribute to a greener planet{" "}
          <br /> with TVK Solar and Electrical Services.
        </p>
        <Link
          href="/contact"
          className={`text-md text-gray-900 bg-green-500 p-3 rounded-xl hover:bg-green-400 lg:text-lg`}
        >
          Get a Free Quote
        </Link>
      </section>
    </>
  );
}
