import Image from "next/image";
import Link from "next/link";

export default function PartnersSectin() {
  return (
    <section id="contact" className="p-3 md:p-5 lg:p-10">
      <h1 className="text-[1.7rem] text-sky-300 font-semibold pb-[30px] md:text-3xl lg:pb-[25px] lg:text-5xl">
        Get in touch
      </h1>
      <div className="grid gap-8 md:grid-cols-4 items-center justify-center">
        
      </div>
      <p className="mt-8 text-sky-100">
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
