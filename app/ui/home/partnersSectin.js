import Image from "next/image";
import Link from "next/link";
import icon1 from "../../../public/brand-image.png";
import icon2 from "../../../public/icon-2.png";
import icon3 from "../../../public/icon-3.png";
import icon4 from "../../../public/icon-4.png";

export default function PartnersSectin() {
  return (
    <section className="p-3 md:p-5 lg:p-10">
      <h2 className="text-green-500 mb-3 font-semibold text-2xl md:text-4xl">
        Our Trusted Partners
      </h2>
      <p className="mb-8 text-yellow-500">
        We collaborate with industry leaders to provide the highest quality
        solar and electrical solutions.
      </p>
      <div className="grid gap-8 md:grid-cols-4 items-center justify-center">
        <Image
          src={icon1}
          alt="Partner 1"
          width={100}
          height={100}
          className="h-16 mx-auto w-16"
        />
        <Image
          src={icon2}
          alt="Partner 2"
          width={100}
          height={100}
          className="h-16 mx-auto w-16"
        />
        <Image
          src={icon3}
          alt="Partner 3"
          width={100}
          height={100}
          className="h-16 mx-auto w-16"
        />
        <Image
          src={icon4}
          alt="Partner 4"
          width={100}
          height={100}
          className="h-16 mx-auto w-16"
        />
        {/* Add more partner logos as needed */}
      </div>
      <p className="mt-8 text-yellow-500">
        Interested in partnering with us?{" "}
        <Link
          href="/contact"
          className="text-green-500 hover:underline underline-offset-4"
        >
          Get in touch.
        </Link>
      </p>
    </section>
  );
}
