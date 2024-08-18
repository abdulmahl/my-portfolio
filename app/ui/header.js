import React from "react";
import Image from "next/image";
import DeskTopNav from "./deskTopNav";
import Link from "next/link";
import { MobileNav } from "./mobileNav";

export default function Header() {
  return (
    <>
      <header className="p-3 bg-black fixed top-0 left-0 right-0 flex items-center justify-between border-b border-blue-900 md:p-5 lg:p-10">
        <Link href={"#home"}>
          <div className="flex items-center gap-1 text-sky-100 text-lg font-bold leading-none md:text-xl md:leading-none lg:hidden">
            <Image
              src={"/image.jpeg"}
              alt="Abdul"
              width={80}
              height={80}
              className=""
            />
          </div>
          <div className="hidden lg:flex gap-2 items-center text-sky-100 font-bold leading-none text-2xl">
            <Image
              src={"/image.jpeg"}
              alt="Abdul"
              width={130}
              height={130}
              className=""
            />
          </div>
        </Link>
        <DeskTopNav />
        <MobileNav />
      </header>
    </>
  );
}
