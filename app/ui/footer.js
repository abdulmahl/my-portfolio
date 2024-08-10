import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date();

  return (
    <footer className="py-5 w-[95%] m-auto flex flex-col items-center justify-between text-sm border-t border-yellow-500 text-yellow-500 lg:text-lg">
      <p>
        &copy; <span>{year.getFullYear()}</span> TVK Solar & Electrical Services
      </p>
      <p>
        Created by{" "}
        <Link
          href={"https://my-portfolio-5d0f.onrender.com/"}
          target="_blank"
          className="hover:text-green-500 hover:underline underline-offset-8"
        >
          Mduduzi A. Mahlangu
        </Link>
      </p>
    </footer>
  );
}
