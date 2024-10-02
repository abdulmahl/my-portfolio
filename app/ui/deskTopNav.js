"use client";

import { routes } from "./routes";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter

export default function DeskTopNav() {
  const pathname = usePathname(); // Get the current path

  return (
    <ul className="hidden lg:flex lg:items-center gap-7 text-lg">
      {routes.map((route) => {
        const { title, href, icon } = route;
        const isActive = pathname === href; // Check if the current path matches the link's href

        return (
          <li key={title}>
            <Link
              href={href}
              className={`flex items-center gap-1
                ${
                  isActive
                    ? "text-sky-300 underline underline-offset-8"
                    : "text-sky-100"
                }
                hover:text-sky-300`}
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
