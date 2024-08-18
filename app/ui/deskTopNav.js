import { routes } from "./routes";
import Link from "next/link";

export default function DeskTopNav() {

  return (
    <ul className="hidden lg:flex lg:items-center gap-7 text-lg">
      {routes.map((route) => {
        const { title, href, icon } = route;

        return (
          <li key={title}>
            <Link
              href={href}
              className={`flex items-center gap-1
                 text-sky-100 hover:underline hover:underline-offset-8
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
