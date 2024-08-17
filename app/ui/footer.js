import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date();

  return (
    <footer className="py-5 w-[95%] m-auto flex flex-col items-center justify-between text-sm border-t border-blue-900 text-sky-100 lg:text-lg">
      <p>
        &copy; <span>{year.getFullYear()}</span>{" - "}
        Mduduzi A. Mahlangu - All Right Reserved
      </p>
    </footer>
  );
}
