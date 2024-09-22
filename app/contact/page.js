"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import {
  AtSymbolIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function ContactMePage() {
  return (
    <section className="p-3 pt-[80px] flex flex-col md:p-5 md:pt-[100px] lg:pt-[150px] lg:px-20">
      <h2 className="text-[1.7rem] text-center text-sky-300 font-semibold md:text-3xl lg:text-5xl lg:text-left">
        Get in touch
      </h2>
      <form className="text-gray-900 w-[360px] md:m-auto lg:m-0">
        <label
          htmlFor="firstname"
          className="text-xs font-medium text-gray-900"
        >
          <UserIcon className="pointer-events-none relative top-7 left-3 h-[18px] w-[18px] text-gray-900" />
          <input
            className="peer block w-full rounded-xl border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-900"
            id="firstname"
            type="firstname"
            name="firstname"
            placeholder="Enter your firstname"
            required
          />
        </label>

        <label
          htmlFor="firstname"
          className="block text-xs font-medium text-gray-900"
        >
          Lastname
          <UserIcon className="pointer-events-none relative top-9 left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-900" />
          <input
            className="peer block w-full rounded-xl border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-900"
            id="lastname"
            type="lastname"
            name="lastname"
            placeholder="Enter your lastname"
            required
          />
        </label>

        <label
          className="block text-xs font-medium text-gray-900"
          htmlFor="email"
        >
          Email
          <AtSymbolIcon className="pointer-events-none relative top-[38px] left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-900" />
          <input
            className="peer block w-full rounded-xl border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-900"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </label>

        <div className="">
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="message"
          >
            Message
            <DocumentTextIcon className="pointer-events-none relative top-9 left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-900" />
            <textarea
              className="peer block w-full rounded-xl border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-900 resize-none"
              id="message"
              name="message"
              placeholder="Type your message here"
              required
              minLength={6}
            />
          </label>
        </div>

        <div
          className={`mt-5 w-[360px] flex justify-start items-center gap-3 text-md text-sky-100 bg-blue-800 p-3 rounded-xl hover:bg-blue-900 lg:text-lg`}
        >
          <Link href="#contact">Send Message</Link>
          <FaArrowRight />
        </div>
      </form>
    </section>
  );
}
