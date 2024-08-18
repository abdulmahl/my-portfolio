"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  AtSymbolIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="p-3 pt-[90px] flex flex-col md:p-5 md:pt-[50px] lg:pt-[170px] lg:p-10"
    >
      <h2 className="text-[1.7rem] text-sky-300 font-semibold md:text-3xl lg:text-5xl">
        Get in touch
      </h2>
      <form className="text-gray-900 w-[360px] m-auto">
        <label
          htmlFor="firstname"
          className="text-xs font-medium text-gray-900"
        >
          Firstname
          <UserIcon className="pointer-events-none relative top-7 left-3 h-[18px] w-[18px] text-gray-900" />
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-900"
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
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-900"
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
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-900"
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
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-900 resize-none"
              id="message"
              name="message"
              placeholder="Type your message here"
              required
              minLength={6}
            />
          </label>
        </div>

        <div
          className={`mt-5 w-[360px] flex justify-start items-center gap-3 text-md text-sky-100 bg-blue-800 p-3 rounded-lg hover:bg-blue-900 lg:text-lg`}
        >
          <Link href="#contact">Send Message</Link>
          <FaArrowRight />
        </div>
      </form>

      <p className="mt-8 mb-3 px-3 md:px-5 lg:px-10 text-sky-100">
        Interested in my work?{" "}
        <Link
          href="tel:0769001909"
          className="text-sky-300 hover:underline underline-offset-4"
        >
          Get in touch.
        </Link>
      </p>
    </section>
  );
}
