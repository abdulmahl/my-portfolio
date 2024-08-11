import React from "react";
import HeroBackgroundImage from "./heroBackgroundImage";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <HeroBackgroundImage />
      <section
        className={` absolute p-3 md:p-5 lg:px-10 md:mr-[230px] lg:mr-[800px]`}
      >
        <h1
          className={
            "text-md text-green-500 font-semibold pb-[1px] md:text-xl lg:pb-[5px] lg:text-2xl"
          }
        >
          <em>Power Your Future with Clean, Reliable Energy</em>
        </h1>
        <p
          className={
            "md:hidden lg:hidden text-sm text-gray-400 pb-[25px] lg:text-lg"
          }
        >
          TVK Electrical and Solar Services: Your one-stop solution for all
          electrical and solar needs—reliable, efficient, and sustainable for
          your home and business.
        </p>

        <p
          className={
            "hidden lg:hidden md:block text-gray-400 pb-[25px] lg:text-lg"
          }
        >
          TVK Electrical and Solar Services: Your one-stop solution for <br />{" "}
          all electrical and solar needs—reliable, efficient, and sustainable{" "}
          <br /> for your home and business.
        </p>

        <p
          className={
            "hidden md:hidden lg:block text-gray-400 pb-[30px] lg:text-lg"
          }
        >
          TVK Electrical and Solar Services: Your one-stop solution for all{" "}
          <br />
          electrical and solar needs—reliable, efficient, and sustainable for{" "}
          <br />
          your home and business.
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
