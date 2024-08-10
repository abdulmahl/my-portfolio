"use client";

import { routes } from "./routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DeskTopNav() {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex lg:items-center gap-7 text-lg">
      {routes.map((route) => {
        const { title, href, icon } = route;
        const isActive = pathname === href;

        return (
          <li key={title}>
            <Link
              href={href}
              className={`flex items-center gap-1 ${
                isActive ? `text-green-600 underline underline-offset-8` : `text-yellow-500`
              } hover:text-green-300`}
            >
              {icon}
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
