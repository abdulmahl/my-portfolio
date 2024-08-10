import Image from "next/image";
import image1 from "../../../public/company-services-1.jpeg";
import image2 from "../../../public/company-services-2.jpeg";
import image3 from "../../../public/company-services-4.jpeg";
import image4 from "../../../public/company-services-3.png";

export default function CompanyServicesImages() {
  return (
    <>
      <Image
        src={image1}
        alt="Comapany Services"
        width={200}
        height={"auto"}
        className="rounded-[72%28%62%38%/25%70%30%75%]"
      />
      <Image
        src={image2}
        alt="Company Services"
        width={200}
        height={"auto"}
        className="rounded-[62%38%53%47%/32%60%40%68%]"
      />
      <Image
        src={image4}
        alt="Comapany Services"
        width={200}
        height={"auto"}
        className="rounded-[80%20%79%21%/19%75%25%81%]"
      />
      <Image
        src={image3}
        alt="Comapany Services"
        width={200}
        height={"auto"}
        className="rounded-[37%63%39%61%/70%37%63%30%]"
      />
    </>
  );
}
