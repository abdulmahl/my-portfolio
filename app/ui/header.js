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
          <Image
            src={"/tvk-company-logo.png"}
            alt="TVK Solar & Electrical"
            width={50}
            height={50}
            className="lg:hidden"
          />
          <Image
            src={"/tvk-company-logo.png"}
            alt="TVK Solar & Electrical"
            width={65}
            height={65}
            className="hidden lg:block lg:mr-10"
          />
        </Link>
        <DeskTopNav />
        <MobileNav />
      </header>
    </>
  );
}
