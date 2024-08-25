import React from "react";
import Image from "next/image";
import DeskTopNav from "./deskTopNav";
import Link from "next/link";
import { MobileNav } from "./mobileNav";
import logo from "../../public/logo.jpeg";

export default function Header() {
  return (
    <>
      <header className="p-3 bg-black fixed top-0 left-0 right-0 flex items-center justify-between border-b border-blue-900 md:p-5 lg:p-10">
        <Link href={"#home"}>
          <div className="flex items-center gap-1 text-sky-100 text-lg font-bold leading-none md:text-xl md:leading-none lg:hidden">
            <Image
              src={logo}
              alt="Abdul"
              width={50}
              height={50}
              className="rounded-full hover:border border-blue-900 w-[40px]"
            />
          </div>
          <div className="hidden lg:flex gap-2 items-center text-sky-100 font-bold leading-none text-2xl">
            <Image
              src={logo}
              alt="Abdul"
              width={50}
              height={50}
              className="rounded-full hover:border border-blue-900"
            />
          </div>
        </Link>
        <DeskTopNav />
        <MobileNav />
      </header>
    </>
  );
}
