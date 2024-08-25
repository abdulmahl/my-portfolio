import Link from "next/link";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const year = new Date();

  return (
    <footer className="py-5 w-[95%] flex flex-col gap-5 items-center justify-between text-sm border-t border-blue-900 text-sky-100 lg:text-lg relative">
      <p>
        &copy; <span>{year.getFullYear()}</span>
        {" - "}Mduduzi A. Mahlangu - All Rights Reserved
      </p>
      <div className="flex gap-3">
        <Link
          href={"https://wa.me/0769001909"}
          target="_blank"
          className="hover:text-sky-300"
        >
          <FaWhatsapp size={25} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/abdul-mahlangu/"}
          target="_blank"
          className="hover:text-sky-300"
        >
          <FaLinkedin size={25} />
        </Link>
        <Link
          href={"https://www.tiktok.com/@m_abdul87"}
          target="_blank"
          className="hover:text-sky-300"
        >
          <FaTiktok size={25} />
        </Link>
        <Link
          href={"https://web.facebook.com/mduduziabdul.Mahlangu.7"}
          target="_blank"
          className="hover:text-sky-300"
        >
          <FaFacebook size={25} />
        </Link>
      </div>
    </footer>
  );
}
