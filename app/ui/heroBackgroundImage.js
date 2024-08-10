import React from "react";
import heroImageMobileSmall from "../../public/tvk-hero-sm.jpeg";
import heroImageMobileMedium from "../../public/tvk-hero-md.png";
import heroImageDesktop from "../../public/tvk-hero-desktop.png";
import Image from "next/image";

export default function HeroBackgroundImage() {
  return (
    <>
      <Image
        src={heroImageMobileSmall}
        alt="Hero Background"
        placeholder="blur"
        quality={100}
        style={{
          // objectFit: "cover",
          padding: "10px",
          opacity: 0.5,
        }}
        className="md:hidden w-full"
      />
      <Image
        src={heroImageMobileMedium}
        alt="Hero Background"
        placeholder="blur"
        quality={100}
        style={{
          padding: "20px",
          opacity: 0.5,
        }}
        className="hidden md:block lg:hidden w-full"
      />
      <Image
        src={heroImageDesktop}
        alt="Hero Background"
        placeholder="blur"
        quality={100}
        style={{
          opacity: 0.5,
        }}
        className="hidden md:hidden lg:block w-full px-[35px] mt-3"
      />
    </>
  );
}
