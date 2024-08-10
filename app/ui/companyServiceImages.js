import Image from "next/image";
import image1 from "../../public/company-services-1.jpeg";
import image2 from "../../public/company-services-2.jpeg";
import image3 from "../../public/company-services-3.png";
import image4 from "../../public/company-services-4.jpeg";

export default function CompanyServicesImages() {
  return (
    <>
      <Image
        src={image1}
        alt="Comapany Services"
        width={400}
        height={"auto"}
        className="lg:w-[230px]"
      />
      <Image
        src={image2}
        alt="Comapany Services"
        width={400}
        height={"auto"}
        className="lg:w-[200px] lg:rounded-tl-full"
      />
      <Image
        src={image4}
        alt="Comapany Services"
        width={400}
        height={"auto"}
        className="lg:w-[200px] lg:rounded-tr-full"
      />
      <Image
        src={image3}
        alt="Comapany Services"
        width={400}
        height={"auto"}
        className="lg:w-[230px]"
      />
    </>
  );
}
