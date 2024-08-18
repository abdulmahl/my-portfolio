import Image from "next/image";
import image1 from "../../../public/company-1.jpeg";
import image2 from "../../../public/company-2.jpeg";
import image3 from "../../../public/company-3.jpeg";
import image4 from "../../../public/company-4.jpeg";
import image5 from "../../../public/company-5.jpeg";
import image6 from "../../../public/company-6.jpeg";

import itemsStyles from "./homeStyles.module.css";

export default function CompanyServicesImages() {
  return (
    <div
      className={`flex gap-20 overflow-x-auto pt-7 snap-x snap-mandatory md:grid md:grid-cols-2 place-items-center lg:grid lg:grid-cols-3 lg:pt-0`}
    >
      <Image
        src={image1}
        alt="Comapany Services"
        width={250}
        height={"auto"}
        className={`${itemsStyles.itemsImg} rounded-[72%28%62%38%/25%70%30%75%] md:w-[200px]`}
      />
      <Image
        src={image2}
        alt="Company Services"
        width={250}
        height={"auto"}
        className={`${itemsStyles.itemsImg} rounded-[62%38%53%47%/32%60%40%68%] md:w-[200px]`}
      />
      <Image
        src={image4}
        alt="Comapany Services"
        width={250}
        height={"auto"}
        className={`${itemsStyles.itemsImg} rounded-[80%20%79%21%/19%75%25%81%] md:w-[200px]`}
      />
      <Image
        src={image3}
        alt="Comapany Services"
        width={250}
        height={"auto"}
        className={`${itemsStyles.itemsImg} rounded-[37%63%39%61%/70%37%63%30%] md:w-[200px]`}
      />
      <Image
        src={image5}
        alt="Comapany Services"
        width={250}
        height={"auto"}
        className={`${itemsStyles.itemsImg} rounded-[40%60%53%47%/68%53%47%32%] md:w-[200px]`}
      />
      <Image
        src={image6}
        alt="Comapany Services"
        width={250}
        height={"auto"}
        className={`${itemsStyles.itemsImg} rounded-[65%35%60%40%/45%58%42%55%] md:w-[200px]`}
      />
    </div>
  );
}
