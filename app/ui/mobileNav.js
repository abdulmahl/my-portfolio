"use client";

import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "./routes";

export const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="lg:hidden text-yellow-500">
      <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
      <div className="">
        {isOpen && (
          <div className="fixed left-0 right-0 top-[80px] z-50 shadow-4xl p-5 bg-neutral-900 border-b border-yellow-500/20">
            <ul className="grid gap-2 ">
              {routes.map((route) => {
                const { icon } = route;
                return (
                  <li
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-yellow-500 via-neutral-950 to-green-300"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 text-sm">{route.title}</span>
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
