import React from "react";
import Image from "next/image";
import DeskTopNav from "./deskTopNav";
import Link from "next/link";
import { MobileNav } from "./mobileNav";

export default function Header() {
  return (
    <>
      <header className="py-5 flex items-center justify-between border-b border-yellow-500 w-[95%] m-auto">
        <Link href={"/"}>
          <div className="flex items-center gap-1 text-yellow-500 text-lg font-bold leading-none md:text-xl md:leading-none lg:hidden">
            <Image
              src={"/tvk-company-logo.png"}
              alt="TVK Solar & Electrical"
              width={50}
              height={50}
              className=""
            />
            Solar & <br /> Electrical
          </div>
          <div className="hidden lg:flex gap-2 items-center text-yellow-500 font-bold leading-none text-2xl">
            <Image
              src={"/tvk-company-logo.png"}
              alt="TVK Solar & Electrical"
              width={65}
              height={65}
              className=""
            />
            Solar & <br /> Electrical
          </div>
        </Link>
        <DeskTopNav />
        <MobileNav />
      </header>
    </>
  );
}
